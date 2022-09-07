import _ from 'lodash';
import {ActionReturnType, ArgumentTypes, DropFirst} from '../types/utils';
import * as actions from './actions';
import * as selectors from './selectors';
import {store, useAppSelector} from './store';

type Selectors = typeof selectors;
type Actions = typeof actions;

type WrappedSelectors = {
  [K in keyof Selectors]: (...args: DropFirst<ArgumentTypes<Selectors[K]>>) => ReturnType<Selectors[K]>;
};
type WrappedActions = {
  [K in keyof Actions]: (...args: ArgumentTypes<Actions[K]>) => ActionReturnType<Actions[K]>;
};

const wrapSelector = <S extends (...args: any[]) => any, R = ReturnType<S>>(selector: S) => {
  return (...args: DropFirst<ArgumentTypes<S>>) => useAppSelector<R>((state) => selector(state, ...args), _.isEqual);
};

const wrapSelectors = (selectorsToWrap: Selectors) => {
  return _.mapValues(selectorsToWrap, (selector) => {
    return wrapSelector(selector);
  }) as WrappedSelectors;
};

const wrapAction = <S extends (...args: any[]) => any, R = ActionReturnType<S>>(action: S) => {
  return (...args: ArgumentTypes<S>): R => store.dispatch(action(...args));
};

const wrapActions = (actionsToWrap: Actions) => {
  return _.mapValues(actionsToWrap, (action) => {
    return wrapAction(action);
  }) as WrappedActions;
};

export class ReduxStore {
  public readonly select: WrappedSelectors;
  public readonly perform: WrappedActions;

  constructor() {
    console.log('ReduxStore created');

    this.select = wrapSelectors(selectors);
    this.perform = wrapActions(actions);
  }
}

import _ from 'lodash';
import {RecoilValue, useRecoilValue} from 'recoil';
import {ArgumentTypes} from '../types/utils';
import * as actions from './actions';
import * as selectors from './selectors';
import {todo} from './selectors';

type Selectors = typeof selectors;
type Actions = typeof actions;

type RecoilUnwrappedValue<T> = T extends RecoilValue<infer U> ? U : never;

type WrappedSelectors = {
  [K in keyof Selectors]: Selectors[K] extends (...args: any[]) => any
    ? (...args: ArgumentTypes<Selectors[K]>) => RecoilUnwrappedValue<ReturnType<Selectors[K]>>
    : () => RecoilUnwrappedValue<Selectors[K]>;
};

const wrapSelector = <S extends (...args: any[]) => any, R = ReturnType<S>>(selector: S) => {
  return (...args: ArgumentTypes<S>) => useRecoilValue<RecoilUnwrappedValue<R>>(selector(...args));
};
const qwe = wrapSelector(todo);

const wrapSelectors = (selectorsToWrap: Selectors) => {
  return _.mapValues(selectorsToWrap, (selector) => {
    if (selector instanceof Function) {
      return wrapSelector(selector);
    }

    return () => useRecoilValue(selector);
  }) as WrappedSelectors;
};

export class RecoilStore {
  public readonly select: WrappedSelectors;
  public readonly perform: Actions;

  constructor() {
    console.log('RecoilStore created');

    this.select = wrapSelectors(selectors);
    this.perform = actions;
  }
}

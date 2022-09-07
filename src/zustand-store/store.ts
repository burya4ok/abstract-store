import * as actions from './actions';
import * as selectors from './selectors';

type Selectors = typeof selectors;
type Actions = typeof actions;

export class ZustandStore {
  public readonly select: Selectors;
  public readonly perform: Actions;

  constructor() {
    console.log('ZustandStore created');

    this.select = selectors;
    this.perform = actions;
  }
}

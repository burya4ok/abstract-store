import {DependenciesOf, Graph, ObjectGraph, Provides, Singleton} from 'react-obsidian';
import {RecoilStore} from '../recoil-store/store';
import {ReduxStore} from '../redux-store/wrapped-store';
import {initialStore} from '../utils/store-switcher';
import {ZustandStore} from './../zustand-store/store';

export type AppGraphDependencies = DependenciesOf<AppGraph>;

@Singleton()
@Graph()
export class AppGraph extends ObjectGraph {
  @Provides()
  store() {
    switch (initialStore) {
      case 'redux':
        return new ReduxStore();
      case 'recoil':
        return new RecoilStore();
      case 'zustand':
        return new ZustandStore();
      default:
        throw new Error(`Unsupported store: ${initialStore}`);
    }
  }
}

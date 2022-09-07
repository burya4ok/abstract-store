import {Provider} from 'react-redux';
import {RecoilRoot} from 'recoil';
import RecoilNexus from 'recoil-nexus';
import {store} from './redux-store/store';
import {initialStore} from './utils/store-switcher';

export const StoreProvider = ({children}: {children: React.ReactNode}) => {
  switch (initialStore) {
    case 'redux':
      return <Provider store={store}>{children}</Provider>;
    case 'recoil':
      return (
        <RecoilRoot>
          <RecoilNexus />
          {children}
        </RecoilRoot>
      );
    default:
      return <>{children}</>;
  }
};

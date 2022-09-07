import {atom} from 'recoil';
import {Todo} from '../../types/Todo';

type DefaultState = {
  list: Record<string, Todo>;
};

const defaultState: DefaultState = {
  list: {},
};

export const todosState = atom({
  key: 'todosState',
  default: defaultState,
});

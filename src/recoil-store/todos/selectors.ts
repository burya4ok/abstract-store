import {selector, selectorFamily} from 'recoil';
import {todosState} from './state';

export const todosKeys = selector({
  key: 'todosKeys',
  get: ({get}) => {
    const {list} = get(todosState);

    return Object.values(list)
      .sort((a, b) => a.time - b.time)
      .map((todo) => todo.id);
  },
});

export const todo = selectorFamily({
  key: 'todo',
  get:
    (id: string) =>
    ({get}) => {
      const {list} = get(todosState);

      return list[id];
    },
});

import {todoState} from './state';

export const todosKeys = () =>
  todoState((state) => {
    return Object.values(state.list)
      .sort((a, b) => a.time - b.time)
      .map((todo) => todo.id);
  });

export const todo = (id: string) => todoState((state) => state.list[id]);

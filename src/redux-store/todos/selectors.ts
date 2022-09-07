import {RootState} from '../store';

export const todosKeys = (state: RootState) => {
  return Object.values(state.todos.list)
    .sort((a, b) => a.time - b.time)
    .map((todo) => todo.id);
};

export const todo = (state: RootState, id: string) => state.todos.list[id];

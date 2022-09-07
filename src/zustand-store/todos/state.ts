import create from 'zustand';
import {immer} from 'zustand/middleware/immer';

import {Todo} from '../../types/Todo';

export type TodoState = {
  list: Record<string, Todo>;
  addTodo(todo: Pick<Todo, 'id' | 'name' | 'description'>): void;
  updateTodo(todo: Pick<Todo, 'id'> & Partial<Todo>): void;
  deleteTodo(todo: Pick<Todo, 'id'>): void;
};

export const todoState = create<TodoState>()(
  immer((set, get) => ({
    list: {},
    addTodo(todo) {
      set((state) => {
        state.list[todo.id] = {
          ...todo,
          time: new Date().getTime(),
          done: false,
        };
      });
    },
    updateTodo(todo) {
      set((state) => {
        const currentTodo = state.list[todo.id];

        state.list[todo.id] = {
          ...currentTodo,
          time: new Date().getTime(),
          ...todo,
        };
      });
    },
    deleteTodo(todo) {
      set((state) => {
        delete state.list[todo.id];
      });
    },
  }))
);

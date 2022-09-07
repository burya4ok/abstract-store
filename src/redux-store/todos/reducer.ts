import {createReducer} from '@reduxjs/toolkit';
import {Todo} from '../../types/Todo';
import {addTodo, deleteTodo, updateTodo} from './actions';

type InitialState = {
  list: Record<string, Todo>;
};

const initialState: InitialState = {
  list: {},
};

export const todosReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.list[action.payload.id] = {
        ...action.payload,
        time: new Date().getTime(),
        done: false,
      };
    })
    .addCase(updateTodo, (state, action) => {
      const todo = state.list[action.payload.id];
      state.list[action.payload.id] = {
        ...todo,
        time: new Date().getTime(),
        ...action.payload,
      };
    })
    .addCase(deleteTodo, (state, action) => {
      delete state.list[action.payload.id];
    });
});

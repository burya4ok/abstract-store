import {todoState} from './state';

export const addTodo = todoState.getState().addTodo;
export const updateTodo = todoState.getState().updateTodo;
export const deleteTodo = todoState.getState().deleteTodo;

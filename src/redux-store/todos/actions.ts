import { createAction } from "@reduxjs/toolkit";
import { Todo } from './../../types/Todo';

export const addTodo = createAction<Pick<Todo, 'id' | 'name' | 'description'>>('redux/addTodo')
export const updateTodo = createAction<Pick<Todo, 'id'> & Partial<Todo>>('redux/updateTodo')
export const deleteTodo = createAction<Pick<Todo, 'id'>>('redux/deleteTodo')
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { todosReducer } from './todos/reducer';

const reducer = combineReducers({
    todos: todosReducer
})

export const store = configureStore({
    reducer,
});

export const dispatch = store.dispatch;
export type RootState = ReturnType<typeof reducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import {setRecoil} from 'recoil-nexus';
import {Todo} from '../../types/Todo';

import {todosState} from './state';

export const addTodo = (todo: Pick<Todo, 'id' | 'name' | 'description'>) => {
  setRecoil(todosState, ({list}) => {
    return {
      list: {
        ...list,
        [todo.id]: {
          ...todo,
          time: new Date().getTime(),
          done: false,
        },
      },
    };
  });
};

export const updateTodo = (todo: Pick<Todo, 'id'> & Partial<Todo>) => {
  setRecoil(todosState, ({list}) => {
    return {
      list: {
        ...list,
        [todo.id]: {
          ...list[todo.id],
          time: new Date().getTime(),
          ...todo,
        },
      },
    };
  });
};

export const deleteTodo = ({id}: Pick<Todo, 'id'>) => {
  setRecoil(todosState, ({list}) => {
    const {[id]: _, ...rest} = list;

    return {
      list: rest,
    };
  });
};

import {TrashIcon} from '@heroicons/react/24/outline';
import {useCallback} from 'react';
import {asComponent} from '../di/as-component';

export type TodoProps = {
  id: string;
};

export const Todo = asComponent<TodoProps>(({id, store: {select, perform}}) => {
  const {name, description, done} = select.todo(id);

  const handleOnChangeDone = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      perform.updateTodo({
        id,
        done: event.target.checked,
      });
    },
    [id, perform]
  );

  const handleOnClickDelete = useCallback(() => {
    perform.deleteTodo({
      id,
    });
  }, [id, perform]);

  return (
    <li key={id} className="relative bg-white py-5 px-4">
      <div className="flex justify-between">
        <div className="flex-1 items-start">
          <p className="text-sm text-left font-medium text-indigo-600">{name}</p>
          <p className="text-sm text-left text-gray-500">{description}</p>
        </div>
        <div className="ml-4 items-center">
          <input
            id="done"
            name="done"
            type="checkbox"
            checked={done}
            onChange={handleOnChangeDone}
            className="h-10 w-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
          />
        </div>
        <div className="ml-4 items-center">
          <p
            className="flex h-10 w-10 rounded bg-white hover:bg-red-600 hover:text-white items-center justify-center cursor-pointer"
            onClick={handleOnClickDelete}
          >
            <TrashIcon className="flex-1 p-2 text-red-600 hover:text-white" />
          </p>
        </div>
      </div>
    </li>
  );
}, 'Todo');

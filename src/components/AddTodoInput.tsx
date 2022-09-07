import {useForm} from 'react-hook-form';
import {v4 as uuidv4} from 'uuid';
import {asComponent} from '../di/as-component';

export type TodoForm = {
  name: string;
  description?: string;
};

export const AddTodoInput = asComponent(({store: {perform}}) => {
  const {register, getValues, reset} = useForm<TodoForm>();
  const handleSubmitClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const values = getValues();

    perform.addTodo({
      id: uuidv4(),
      name: values.name,
      description: values.description,
    });

    reset();
  };

  return (
    <form className="relative">
      <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
        <label htmlFor="name" className="sr-only">
          Todo Name
        </label>
        <input
          type="text"
          {...register('name')}
          className="block w-full border-0 pt-2.5 text-lg font-medium placeholder-gray-500 focus:ring-0"
          placeholder="Todo Name"
          required
        />
        <label htmlFor="description" className="sr-only">
          Todo Description
        </label>
        <textarea
          rows={2}
          {...register('description')}
          className="block w-full resize-none border-0 py-0 placeholder-gray-500 focus:ring-0 sm:text-sm mb-5"
          placeholder="Write a description..."
          defaultValue={''}
        />

        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex" />
          <div className="flex-shrink-0">
            <button
              type="submit"
              onClick={handleSubmitClick}
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}, 'AddTodoInput');

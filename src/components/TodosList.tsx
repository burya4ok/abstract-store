import {asComponent} from '../di/as-component';
import {Todo} from './Todo';

export const TodosList = asComponent(({store: {select}}) => {
  const todosKeys = select.todosKeys();
  const isEmpty = todosKeys.length === 0;

  return (
    <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm">
      {isEmpty ? (
        <div className="mx-auto max-w-3xl text-center p-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">There is no Todos created</h2>
          <p className="mt-4 text-lg text-gray-500">Use fields above to create a new one.</p>
        </div>
      ) : (
        <ul role="list" className="divide-y divide-gray-200">
          {todosKeys.map((key) => (
            <Todo key={key} id={key} />
          ))}
        </ul>
      )}
    </div>
  );
}, 'TodoList');

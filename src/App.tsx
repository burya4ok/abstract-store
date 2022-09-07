import './App.css';
import {AddTodoInput} from './components/AddTodoInput';
import {StoreSwitcher} from './components/StoreSwitcher';
import {TodosList} from './components/TodosList';

function App() {
  return (
    <main className="flex-1">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6">
          <h1 className="text-2xl font-semibold text-gray-900">TODO Example</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <StoreSwitcher />
          <AddTodoInput />
          <div className="mt-6">
            <TodosList />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

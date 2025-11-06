
import React from 'react';
import { Todo } from './types';
import { useLocalStorage } from './hooks/useLocalStorage';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans flex flex-col items-center">
      <div className="w-full max-w-md mx-auto p-4 sm:p-6">
        <Header />
        <main className="mt-8">
          <TodoInput onAddTodo={addTodo} />
          <div className="mt-6 space-y-3">
            {todos.length > 0 ? (
              todos.map(todo => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                />
              ))
            ) : (
              <div className="text-center py-10 px-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <p className="text-gray-500 dark:text-gray-400">No tasks yet. Add one above!</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

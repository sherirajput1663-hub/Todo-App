
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
);


const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.033-2.134H8.033c-1.12 0-2.033.954-2.033 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);


const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`
        flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm
        transition-all duration-300
        ${todo.completed ? 'opacity-60' : ''}
      `}>
      <button
        onClick={() => onToggle(todo.id)}
        className={`
            w-6 h-6 rounded-full border-2 flex-shrink-0
            flex items-center justify-center transition-all duration-200
            ${todo.completed 
                ? 'bg-indigo-600 border-indigo-600' 
                : 'border-gray-300 dark:border-gray-500 hover:border-indigo-500'}
        `}
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && <CheckIcon className="w-4 h-4 text-white" />}
      </button>

      <span className={`
          ml-4 flex-grow text-gray-800 dark:text-gray-200
          transition-all duration-300
          ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}
        `}>
        {todo.text}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="ml-4 p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        aria-label="Delete task"
      >
        <TrashIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TodoItem;

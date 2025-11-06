
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
        Todo List
      </h1>
      <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
        Your tasks, organized.
      </p>
    </header>
  );
};

export default Header;

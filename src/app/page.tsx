'use client';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Welcome to To-Do App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

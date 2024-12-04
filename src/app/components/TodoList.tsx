'use client';

import { useTodoStore } from "../store/TodoStore";

const TodoList = () => {
  const { todos, toggleTodo, removeTodo } = useTodoStore();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-white p-4 rounded shadow"
        >
          <span
            className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>
          <button
            onClick={() => removeTodo(todo.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

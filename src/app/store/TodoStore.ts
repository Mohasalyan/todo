'use client';

import { create } from 'zustand';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void; 
}

export const useTodoStore = create<TodoStore>((set) => {
  let initialTodos: Todo[] = [];

  if (typeof window !== 'undefined') {
    initialTodos = JSON.parse(localStorage.getItem('todos') || '[]');
  }

  return {
    todos: initialTodos,
    addTodo: (text) => {
      set((state) => {
        const newTodos = [...state.todos, { id: Date.now().toString(), text, completed: false }];
        if (typeof window !== 'undefined') {
          localStorage.setItem('todos', JSON.stringify(newTodos));
        }
        return { todos: newTodos };
      });
    },
    toggleTodo: (id) => {
      set((state) => {
        const updatedTodos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        if (typeof window !== 'undefined') {
          localStorage.setItem('todos', JSON.stringify(updatedTodos));
        }
        return { todos: updatedTodos };
      });
    },
    removeTodo: (id) => { 
      set((state) => {
        const filteredTodos = state.todos.filter((todo) => todo.id !== id);
        if (typeof window !== 'undefined') {
          localStorage.setItem('todos', JSON.stringify(filteredTodos));
        }
        return { todos: filteredTodos };
      });
    },
  };
});

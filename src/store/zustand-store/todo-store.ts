import { create } from 'zustand';

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

type TodoStore = {
  todos: Todo[];
  actions: {
    addTodo: (content: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
  };
};

let id = 0;

const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  actions: {
    addTodo: (content) =>
      set((prev) => ({
        todos: [...prev.todos, { id: id++, content, done: false }],
      })),
    removeTodo: (id) =>
      set((prev) => ({
        todos: prev.todos.filter((todo) => todo.id !== id),
      })),
    toggleTodo: (id) =>
      set((prev) => ({
        todos: prev.todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        ),
      })),
  },
}));

export const useTodos = () => useTodoStore((store) => store.todos);
export const useTodoActions = () => useTodoStore((store) => store.actions);

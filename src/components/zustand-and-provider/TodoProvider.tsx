import { ReactNode, createContext, useState } from 'react';
import { StoreApi, UseBoundStore, create } from 'zustand';

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

export type TodoStore = {
  todos: Todo[];
  actions: {
    addTodo: (content: string) => void;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
  };
};

let id = 0;
export const TodoStoreContext = createContext<UseBoundStore<
  StoreApi<TodoStore>
> | null>(null);
export const TodoStoreProvider = ({ children }: { children: ReactNode }) => {
  const [store] = useState(() =>
    create<TodoStore>((set) => ({
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
    }))
  );

  return (
    <TodoStoreContext.Provider value={store}>
      {children}
    </TodoStoreContext.Provider>
  );
};

import { useContext } from 'react';
import { TodoStoreContext } from './TodoProvider';

const useTodoContextStoreOnly = () => {
  const store = useContext(TodoStoreContext);
  if (!store) {
    throw new Error('NO TodoStore');
  }
  return store;
};

export const useTodos = () => {
  const store = useTodoContextStoreOnly();

  return store((state) => state.todos);
};

export const useTodoActions = () => {
  const store = useTodoContextStoreOnly();

  return store((state) => state.actions);
};

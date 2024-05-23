export type Action<T> = (prev: T) => T;
export type Store<T> = {
  getState: () => T;
  setState: (action: T | Action<T>) => void;
  subscribe: (callback: () => void) => () => void;
};

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState;

  const callbacks = new Set<() => void>();

  const getState = () => state;

  const setState = (nextState: T | Action<T>) => {
    state =
      typeof nextState === 'function'
        ? (nextState as Action<T>)(state)
        : (nextState as T);

    callbacks.forEach((callback) => callback());
  };

  const subscribe = (callback: () => void) => {
    callbacks.add(callback);
    return () => {
      callbacks.delete(callback);
    };
  };

  return { getState, setState, subscribe };
};

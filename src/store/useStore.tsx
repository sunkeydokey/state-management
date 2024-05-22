import { useSyncExternalStore } from 'react';
import type { Store, Action } from './moduleStore';
export const useStore = <T,>(
  store: Store<T>
): [T, (action: T | Action<T>) => void] => {
  const state = useSyncExternalStore(store.subscribe, store.getState);

  return [state, store.setState];
};

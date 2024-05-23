import { countStore } from '../store/countStore';
import { useStore } from '../store/hooks/useStore';

export const CountViewer = () => {
  const [state] = useStore(countStore);

  return <div>{state.count}</div>;
};

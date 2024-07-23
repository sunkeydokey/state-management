import { countStore } from '../../store/module-store/countStore';
import { useStore } from '../../store/module-store/hooks/useStore';

export const CountViewer = () => {
  const [state] = useStore(countStore);

  return <div>{state.count}</div>;
};

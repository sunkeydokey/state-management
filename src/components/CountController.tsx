import { ChangeEventHandler } from 'react';
import { countStore } from '../store/countStore';
import { useStore } from '../store/hooks/useStore';

export const CountController = () => {
  const [state, setState] = useStore(countStore);
  const changeState: ChangeEventHandler<HTMLInputElement> = (event) => {
    setState({ count: Number(event.target.value) });
  };

  return (
    <div style={{ width: 80, height: 40 }}>
      <input
        style={{ width: '100%', height: '100%' }}
        type="number"
        max={9}
        min={0}
        value={state.count}
        onChange={changeState}
      />
    </div>
  );
};

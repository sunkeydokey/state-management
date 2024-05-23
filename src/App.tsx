import './App.css';
import { CountController } from './components/CountController';
import { CountViewer } from './components/CountViewer';
import { countStore } from './store/countStore';
import { useStore } from './store/hooks/useStore';

function App() {
  const [state, setState] = useStore(countStore);
  const increase = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  const reset = () => {
    setState({ count: 0 });
  };
  return (
    <>
      <div>
        <button onClick={increase}>+ 1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <CountController />
      <p>{state.count}</p>
      <CountViewer />
    </>
  );
}

export default App;

import './App.css';
import { store } from './store/moduleStore';
import { useStore } from './store/useStore';

function App() {
  const [state, setState] = useStore(store);
  const increase = () => {
    setState((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  };
  return (
    <>
      <div>
        <button onClick={increase}></button>
      </div>
      <p className="read-the-docs">{state.count}</p>
    </>
  );
}

export default App;

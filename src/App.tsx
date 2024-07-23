import { useState } from 'react';
import './App.css';
import { CountController } from './components/module-way/CountController';
import { CountViewer } from './components/module-way/CountViewer';
import { countStore } from './store/module-store/countStore';
import { useStore } from './store/module-store/hooks/useStore';
import { NewTodo } from './components/zustand-way/NewTodo';
import { TodoList } from './components/zustand-way/TodoList';

function App() {
  // const [isMounted, setIsMounted] = useState(true);
  // const [state, setState] = useStore(countStore);
  // const increase = () => {
  //   setState((prev) => ({
  //     count: prev.count + 1,
  //   }));
  // };
  // const reset = () => {
  //   setState({ count: 0 });
  // };
  return (
    <>
      <NewTodo />
      <TodoList />
      {/* <div>
        <button onClick={increase}>+ 1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={() => setIsMounted((prev) => !prev)}>
          {isMounted ? 'unmount controller' : 'mount controller'}
        </button>
      </div>
      {isMounted && <CountController />}
      <p>{state.count}</p>
      <CountViewer /> */}
    </>
  );
}

export default App;

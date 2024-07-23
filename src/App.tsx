import './App.css';
import { NewTodo } from './components/zustand-and-provider/NewTodo';
import { TodoList } from './components/zustand-and-provider/TodoList';
// import { CountController } from './components/module-way/CountController';
// import { CountViewer } from './components/module-way/CountViewer';
// import { countStore } from './store/module-store/countStore';
// import { useStore } from './store/module-store/hooks/useStore';
// import { NewTodo } from './components/zustand-way/NewTodo';
// import { TodoList } from './components/zustand-way/TodoList';
import { TodoStoreProvider } from './components/zustand-and-provider/TodoProvider';

function App() {
  return (
    <>
      <TodoStoreProvider>
        <NewTodo />
        <TodoList />
      </TodoStoreProvider>
      <TodoStoreProvider>
        <NewTodo />
        <TodoList />
      </TodoStoreProvider>
      <TodoStoreProvider>
        <NewTodo />
        <TodoList />
      </TodoStoreProvider>
      <TodoStoreProvider>
        <NewTodo />
        <TodoList />
      </TodoStoreProvider>

      {/* <NewTodo />
      <TodoList /> */}
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

import { useTodos } from '../../store/zustand-store/todo-store';
import { TodoItem } from './TodoItem';

export const TodoList = () => {
  const todos = useTodos();
  console.log({ todos });
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

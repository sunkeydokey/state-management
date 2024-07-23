import { TodoItem } from './TodoItem';
import { useTodos } from './individualTodoStore';

export const TodoList = () => {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

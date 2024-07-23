import { memo } from 'react';
import { Todo, useTodoActions } from '../../store/zustand-store/todo-store';

export const TodoItem = memo(({ todo }: { todo: Todo }) => {
  const { removeTodo, toggleTodo } = useTodoActions();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.content}</span>
      <button onClick={() => removeTodo(todo.id)}>remove</button>
    </div>
  );
});

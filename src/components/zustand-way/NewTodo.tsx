import { type ChangeEventHandler, useState } from 'react';
import { useTodoActions } from '../../store/zustand-store/todo-store';

export const NewTodo = () => {
  const { addTodo } = useTodoActions();
  const [text, setText] = useState('');
  const handleChangeTodo: ChangeEventHandler<HTMLInputElement> = (event) =>
    setText(event.target.value);

  const handleClickAddButton = () => {
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChangeTodo} />
      <button onClick={handleClickAddButton} disabled={!text}>
        Add
      </button>
    </div>
  );
};

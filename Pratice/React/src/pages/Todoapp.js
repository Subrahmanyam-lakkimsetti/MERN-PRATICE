import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useState } from 'react';

const Todoapp = () => {
  const [todo, settodo] = useState([]);
  return (
    <>
      <TodoInput settodo={settodo} />
      <TodoList todo={todo} />
    </>
  );
};

export default Todoapp;

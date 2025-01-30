const TodoList = ({ todo }) => {
  return (
    <>
      <h2>Tasklist</h2>
      {todo.map((elements) => (
        <p>{elements}</p>
      ))}
    </>
  );
};

export default TodoList;

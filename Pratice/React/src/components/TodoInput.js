const TodoInput = ({ settodo }) => {
  const handleclick = () => {
    const inpvalue = document.getElementById('todo');
    const name = inpvalue.value.trim();

    if (name) {
      settodo((prev) => {
        const existsornot = prev.some((elem) => elem === name);
        if (existsornot) {
          alert('task already exists');
          return prev;
        }

        const array = [...prev, name];
        return array;
      });
      inpvalue.value = '';
    }
  };

  return (
    <>
      <label htmlFor="todo">
        Enter todo:
        <input type="text" id="todo"></input>
      </label>

      <button type="button" onClick={handleclick}>
        Add
      </button>
    </>
  );
};

export default TodoInput;
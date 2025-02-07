import PropTypes from 'prop-types';
const TaskForm = ({ getData }) => {
  const addTask = async (obj) => {
    const resp = await fetch('http://localhost:3009/tasks', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers: {
        'content-type': 'application/json',
      },
    });
    const respObj = await resp.json();
    if (respObj.status === 'success') {
      console.log('success');
      getData();
    } else {
      alert(respObj.message);
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    // console.log(e);
    const dataObj = {
      name: e.target.tasklist.value,
      description: e.target.description.value,
      assignment: e.target.assignment.value,
    };
    addTask(dataObj);
  };

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <div>
          <label>Task Title</label>
          <input type="text" name="tasklist" />
        </div>
        <div>
          <label>description</label>
          <input type="text" name="description" />
        </div>
        <div>
          <label>Assignment</label>
          <select name="assignment">
            <option value="Alice">Alice</option>
            <option value="BOB">BOB</option>
          </select>
        </div>
        <button>Add Task</button>
      </form>
    </div>
  );
};

TaskForm.propTypes = {
  getData: PropTypes.func,
};

export default TaskForm;

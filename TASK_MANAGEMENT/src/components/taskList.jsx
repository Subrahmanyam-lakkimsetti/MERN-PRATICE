import { useState } from 'react';
import './taskList.css';
const TaskList = ({ list, setlist }) => {
  const [edittask, setedittask] = useState(-1);
  const [editObj, setEditObj] = useState({});
  console.log(editObj);

  const handleEditChange = (key, value) => {
    setEditObj((prev) => {
      console.log(prev);
      const newObj = { ...prev };
      newObj[key] = value;
      return newObj;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editObj._id);
    const resp = await fetch(`http://localhost:3009/tasks/${editObj._id}`, {
      method: 'PATCH',
      body: JSON.stringify(editObj),
      headers: {
        'content-type': 'application/json',
      },
    });
    const respObj = await resp.json();
    console.log(respObj);

    if (respObj.status === 'sucess') {
      setlist((prev) =>
        prev.map((task) =>
          task._id === editObj._id ? { ...task, ...editObj } : task
        )
      );
      console.log('sucess');
    } else {
      alert(respObj.message);
    }
    setedittask(-1);
  };

  console.log('edit task', edittask);
  return (
    <div className="task-list-main">
      <h3 className="task-list-title">Task List</h3>
      <div className="task-list-task-container">
        {list.map((Element, index) => {
          return (
            <div key={index} className="task-card">
              <h5>{index}</h5>
              {index === edittask ? (
                <div>
                  <label>Task Title: </label>
                  <input
                    value={editObj.name}
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleEditChange('name', e.target.value);
                    }}
                  />
                </div>
              ) : (
                <p>{Element.name}</p>
              )}
              {index === edittask ? (
                <div>
                  <label>Description: </label>
                  <input
                    value={editObj.description}
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleEditChange('description', e.target.value);
                    }}
                  />
                </div>
              ) : (
                <p>{Element.description}</p>
              )}

              {index === edittask ? (
                <div>
                  <button onClick={handleSubmit}>Submit changes</button>
                  <button
                    onClick={() => {
                      setedittask(-1);
                      setEditObj({});
                    }}
                  >
                    cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setEditObj(Element);
                    setedittask(index);
                  }}
                >
                  Edit task
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskList;

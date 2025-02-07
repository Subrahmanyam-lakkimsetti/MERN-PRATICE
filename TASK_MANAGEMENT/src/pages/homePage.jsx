import TaskList from '../components/taskList';
import TaskForm from '../components/taskForm';
import { useEffect, useState } from 'react';
import TaskFilters from '../components/taskFilters';
const HomePage = () => {
  const [list, setlist] = useState([]);

  const getData = async () => {
    const resp = await fetch('http://localhost:3009/tasks');
    const respBody = await resp.json();
    const arrayOfTasklist = respBody.data;
    setlist(arrayOfTasklist);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <TaskForm getData={getData} />
      <TaskFilters />
      <TaskList list={list} setlist={setlist} />
    </>
  );
};

export default HomePage;

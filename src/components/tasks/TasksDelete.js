import React from "react";

const TasksDelete = ({ setTasks }) => {
  const deleteTasks = (e) => {
    e.preventDefault();
    setTasks([]);
  };

  return (
    <button onClick={deleteTasks} className='delete_all_tasks'>
      Удалить все задачи
    </button>
  );
};

export default TasksDelete;

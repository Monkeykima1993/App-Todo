import React from "react";

const TaskItem = ({ task, number, remove }) => {
  let taskColor = false;
  const colorWhite = "#ffffff";
  const colorGreen = "#33ff99";
  const dateStart = Date.now();
  const dateTask = Date.parse(task.date);
  if (dateTask < dateStart) {
    taskColor = true;
  } else {
    taskColor = false;
  }

  return (
    <div
      style={{ background: taskColor ? colorGreen : colorWhite }}
      className='task'
    >
      <div className='task__content'>
        <strong>
          {number}. {task.title}
        </strong>
        <div>{task.body}</div>
        <div>{task.date}</div>
      </div>
      <div className='task__btns'>
        <button onClick={() => remove(task)}>Удалить</button>
      </div>
    </div>
  );
};

export default TaskItem;

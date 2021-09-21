import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import UploadTaskForm from "./UploadTaskForm";
import TaskList from "./TaskList";
import TasksDelete from "./TasksDelete";

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Купить хлеб",
      body: "Зайти в магазин Spar. Купить буханку черного хлеба.",
      date: "2021-09-25",
    },
    {
      id: 2,
      title: "Сделать ТО автомобиля",
      body: "Заехать в автоцентр 'Лада Парус' и провести технический осмотр автомобиля.",
      date: "2021-08-17",
    },
    {
      id: 3,
      title: "Изучить TypeScript",
      body: "Прочитать книгу по TypeScript и попрактиковаться на реальных заданиях.",
      date: "2021-12-05",
    },
  ]);

  const createTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className='taskTable'>
      <AddTaskForm create={createTask} />
      <UploadTaskForm tasks={tasks} setTasks={setTasks} />
      {tasks.length !== 0 ? (
        <TaskList remove={removeTask} tasks={tasks} title='Список задач' />
      ) : (
        <h1 style={{ textAlign: "center" }}>У Вас пока нет задач...</h1>
      )}
      <TasksDelete setTasks={setTasks} />
    </div>
  );
};

export default TaskTable;

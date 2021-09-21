import React from "react";

const AddTaskForm = ({ create }) => {
  const dateStart = Date.now();
  const oneWeek = 604800000;
  const dateEnd = dateStart + oneWeek;

  const addNewTask = (e) => {
    e.preventDefault();
    const task = new FormData(e.target);
    console.log("task", task);

    if (
      task.get("title") !== "" &&
      task.get("body") !== "" &&
      task.get("date") !== ""
    ) {
      const newTask = {
        title: task.get("title"),
        body: task.get("body"),
        date: task.get("date"),
        id: Math.random().toString(36).substr(2, 9),
      };
      create(newTask);
      e.target.reset();
    } else {
      alert("Заполните все поля!");
      return;
    }
  };

  return (
    <form onSubmit={addNewTask} className='addTask'>
      <h1>Добавить новую задачу</h1>
      <input
        name='title'
        defaultValue=''
        type='text'
        placeholder='Название задачи'
        maxLength='100'
      />
      <input
        name='body'
        type='text'
        defaultValue=''
        placeholder='Описание задачи'
        maxLength='240'
      />
      <input
        name='date'
        type='date'
        defaultValue=''
        min={new Date().toISOString().substr(0, 10)}
        max={new Date(dateEnd).toISOString().substr(0, 10)}
        id='task-date'
      />
      <button type='submit'>Добавить задачу</button>
    </form>
  );
};

export default AddTaskForm;

import React from "react";

const UploadTaskForm = ({ tasks, setTasks }) => {
  const uploadFile = async (e) => {
    e.preventDefault();
    let file = new FormData(e.target).get("file");
    if (file.name !== "") {
      file = Buffer.from(await file.arrayBuffer()).toString();
      const tasksArray = file.split("\n");
      tasksArray.forEach((el) => {
        tasks.unshift(JSON.parse(el));
      });
      setTasks([...tasks]);
      e.target.reset();
    } else {
      alert("Выберите файл!");
    }
  };

  return (
    <form onSubmit={uploadFile} className='uploadFile'>
      <h1>Загрузить файл с задачами</h1>
      <input type='file' name='file' />
      <button type='submit'>Загрузить</button>
    </form>
  );
};

export default UploadTaskForm;

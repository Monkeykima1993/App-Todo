import Main from "../main/Main";
import TaskTable from "../tasks/TaskTable";

export const routers = [
  {
    path: "/",
    component: Main,
    exact: true,
  },
  {
    path: "/tasks",
    component: TaskTable,
    exact: true,
  },
];

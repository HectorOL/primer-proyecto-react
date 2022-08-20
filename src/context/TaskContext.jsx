import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  useEffect(() => {
    setTask(data);
  }, []);
  const [task, setTask] = useState([]);
  function createTask(taskO) {
    setTask([
      ...task,
      {
        title: taskO.title,
        id: task.length,
        description: taskO.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((task) => task.id != taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        task,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;

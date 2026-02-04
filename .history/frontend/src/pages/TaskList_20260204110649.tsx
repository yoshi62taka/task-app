import React, { useEffect, useState } from "react";
import { getTasks, deleteTask } from "../api/taskApi";
import { Home } from "./Home";

const TaskList = () => {
  const [tasks, setTasks] = useState<{id:number,title:string}[]>([]);

  useEffect(() => {
    getTasks().then(res => setTasks(res.data));
  }, []);

  const handleDelete = (id:number) => {
    deleteTask(id).then(() => setTasks(tasks.filter(t => t.id !== id)));
  };

  return (
    <div>
      <Home />
      <h1>Task List</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
import React, { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../../api/taskApi";
import TaskRegister from "./TaskRegister";

const TaskList = () => {
  const [tasks, setTasks] = useState<{ id: number; title: string }[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleCreateTask = async (title: string) => {
    const res = await createTask({ title });
    setTasks((prev) => [...prev, res.data]);
  };

  const handleDelete = (id: number) => {
    deleteTask(id).then(() => setTasks(tasks.filter((t) => t.id !== id)));
  };

  return (
    <div>
      <TaskRegister onSubmitTask={handleCreateTask} />
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}{" "}
            <button onClick={() => handleDelete(task.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

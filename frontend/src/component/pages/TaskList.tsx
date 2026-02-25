import React, { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../../api/taskApi";
import TaskRegister from "./TaskRegister";
import "../../styles/tasklist.css";

const TaskList = () => {
  const [tasks, setTasks] = useState<
    { id: number; createdAt: string; title: string }[]
  >([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleCreateTask = async (title: string) => {
    const res = await createTask({ title });
    setTasks((prev) => [...prev, res.data]);
    console.log("登録レスポンス:", res.data);
  };

  const handleDelete = (id: number) => {
    deleteTask(id).then(() => setTasks(tasks.filter((t) => t.id !== id)));
  };

  return (
    <div className="task-list-container">
      <TaskRegister onSubmitTask={handleCreateTask} />
      <h1>Task List</h1>
      <ul>
        <li className="task-header">
          <span className="header-task-title">タイトル</span>
          <span className="header-task-title">作成日時</span>
          <span className="header-task-title">操作</span>
        </li>
        {tasks.map((task) => (
          <li key={task.id} className="task-list">
            <span className="task-title">{task.title}</span>
            <span className="task-created-at">
              {new Date(task.createdAt).toLocaleString()}
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(task.id)}
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

import React, { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../../api/taskApi";
import TaskRegister from "./TaskRegister";
import "../../styles/tasklist.css";
import Button from "../common/Button";
import InputCheckBox from "../common/InputCheckBoxProps";

const TaskList = () => {
  const [tasks, setTasks] = useState<
    { id: number; createdAt: string; title: string; completed: boolean }[]
  >([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  const handleCreateTask = async (title: string) => {
    const res = await createTask({ title });
    setTasks((prev) => [...prev, res.data]);
    console.log("登録レスポンス:", res.data);
  };

  const handleToggle = async (id: number) => {
    const target = tasks.find((t) => t.id === id);
    if (!target) return;

    const updated = { ...target, completed: !target.completed };

    setTasks((prev) => prev.map((t) => (t.id === id ? updated : t)));

    try {
      await updateTask(id, { completed: updated.completed });
    } catch {
      // rollback
      setTasks((prev) => prev.map((t) => (t.id === id ? target : t)));
    }
  };

  const handleDelete = async (id: number) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="task-list-container">
      <TaskRegister onSubmitTask={handleCreateTask} />
      <h1>Task List</h1>
      <table className="task-table">
        <thead>
          <tr className="task-header">
            <th className="header-task-title">タイトル</th>
            <th className="header-task-created-at">作成日時</th>
            <th className="header-task-completed">完了</th>
            <th className="header-task-delete">削除</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="task-list">
              <td className="task-title">{task.title}</td>
              <td className="task-created-at">
                {new Date(task.createdAt).toLocaleString()}
              </td>
              <td className="task-operation">
                <InputCheckBox
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
              </td>
              <td className="task-operation">
                <Button
                  className="delete-button"
                  onClick={() => handleDelete(task.id)}
                >
                  削除
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;

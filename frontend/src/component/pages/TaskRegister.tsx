import React, { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import "../../styles/task-register.css";
import { Link } from "react-router-dom";
import { ClientRequest } from "http";
import TaskList from "./TaskList";



const TaskRegister = ({
  onSubmitTask,
}: {
  onSubmitTask: (title: string) => void;
}) => {
  const [task, setTask] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmitTask(title);
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputText value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button type="submit">Add Task</Button>
      </form>
      <h1>Task List</h1>
      <ul>
        <TaskList />
      </ul>
    </div>
  );
};

export default TaskRegister;

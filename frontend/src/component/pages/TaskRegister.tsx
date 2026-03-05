import React, { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";
import "../../styles/task-register.css";

const TaskRegister = ({
  onSubmitTask,
}: {
  onSubmitTask: (title: string) => void;
}) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onSubmitTask(title);
    setTitle("");
  };

  return (
    <div className="task-register-container">
      <h1>Task Register</h1>
      <form onSubmit={handleSubmit}>
        <InputText value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button type="submit">Add Task</Button>
      </form>
    </div>
  );
};

export default TaskRegister;

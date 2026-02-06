import React, { useState } from "react";
import Button from "../common/Button";
import InputText from "../common/InputText";

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

  // テキストボックスのバリデーションチェック
  const isDisabled = title.length === 0;

  return (
    <form onSubmit={handleSubmit}>
      <h1>タスク登録画面</h1>
      <InputText
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="タスク名を入力してください"
      />
      <Button type="submit" disabled={isDisabled}>
        タスク登録
      </Button>
    </form>
  );
};
export default TaskRegister;

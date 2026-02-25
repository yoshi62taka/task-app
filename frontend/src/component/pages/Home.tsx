// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Home = () => {
  return (
    <div>
      <h1>ホーム画面</h1>
      <Button as={Link} to="/tasks/register">
        タスク登録画面
      </Button>
    </div>
  );
};
export default Home;

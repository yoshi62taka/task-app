import { Routes, Route } from "react-router-dom";
import Home from "../component/pages/Home";
import TaskList from "../component/pages/TaskList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/home/" element={<Home />} />
      <Route path="/tasks/register" element={<TaskList />} />
    </Routes>
  );
}

export default AppRoutes;

import { Routes, Route } from 'react-router-dom';
import Home from './component/pages/Home';
import TaskList from './component/pages/TaskList';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasklist" element={<TaskList />} />
    </Routes>
  );
}

export default App;
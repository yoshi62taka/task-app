import { Routes, Route } from 'react-router-dom';
import TaskList from './pages/TaskList';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasklist" element={<TaskList />} />
    </Routes>
  );
}

export default App;
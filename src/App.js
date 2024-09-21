import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import English from './English';
import Arabic from './Arabic';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/english" element={<English />} />
        <Route path="/arabic" element={<Arabic />} />
      </Routes>
    </Router>
  );
}

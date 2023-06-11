import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import UplaodPage from './pages/UploadImagePage'

function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<UplaodPage />} />

      </Routes>
    </Router>
  );
}

export default App;

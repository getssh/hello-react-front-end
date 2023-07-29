import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Greeting} />
        <Route path="/greeting" Component={Greeting} />
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import Login from './Login';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route , } from "react-router-dom";

function App() {
  return (
  <Router>
      <Routes>
          <Route exact path="/form" element={<Form/>}/>
          <Route exact path="/" element={<Login/>}/>
        </Routes>
      </Router>
  );
}
export default App;

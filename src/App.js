import './App.css'
import Login from './Authentication/Login';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from './Authentication/Register';
import Pages from './Pages';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={ <Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/pages' element={<Pages/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

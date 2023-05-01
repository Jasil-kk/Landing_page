import './App.css'
import Login from './Authentication/Login';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from './Authentication/Register';
import Pages from './Pages';
import ForgotPassword from './Authentication/ForgotPassword';
import ResetPassword from './Authentication/ResetPassword';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={ <Register/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot' element={<ForgotPassword/>}/>
        <Route path='/reset' element={<ResetPassword/>}/>
         <Route path='/pages' element={<Pages/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;

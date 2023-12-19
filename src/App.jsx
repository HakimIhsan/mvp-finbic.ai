import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Menu from './pages/menu/Menu';
import Profiling from './pages/formprofiling/Profiling';
import Manual from './pages/formmanual/Manual';
import Excel from './pages/formexcel/Excel';
import Bank from './pages/formbank/Bank';
import Dashboard from './pages/dashboard/Dashboard';
import Goal from './pages/goal/Goal';
import Feedback from './pages/feedback/Feedback';
function App() {
  return (
    <div>
      <Router>
        Finbic.AI Navbar Here
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/menu' element={<Menu/>}/>
          <Route exact path='/bank' element={<Bank/>}/>
          <Route exact path='/excel' element={<Excel/>}/>
          <Route exact path='/manual' element={<Manual/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/profiling' element={<Profiling/>}/>
          <Route exact path='/goal' element={<Goal/>}/>
          <Route exact path='/feedback' element={<Feedback/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

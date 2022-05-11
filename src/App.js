import './App.css';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home';
import About from'./Pages/About';
import Profile from'./Pages/Profile';
import Login from './Pages/Auth/Login';
// import Footer from './Compoents/Footer';
import Navbar from './Compoents/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile/' element={<Profile />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
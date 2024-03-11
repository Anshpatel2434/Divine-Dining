import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <div className='h-[100vh] overflow-x-hidden relative'>
      <div className='flex justify-center'>
        <Navbar/>
      </div>
      <Routes>
        <Route index path="/home" element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;

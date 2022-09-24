import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Musicplay from './components/main/Musicplay';
import Admin from './components/admin/Index';
import AddMusic from './components/admin/AddMusic';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div >
      <Toaster/>
      <BrowserRouter>
      <Routes>
        <Route element={<Main/>} path="main">
          <Route path="login" element={<Login/>}/>
          <Route path="signup" element={<Signup/>}/>
           <Route path="musicplay" element={<Musicplay/>}/> 
        </Route>
        <Route element={<Admin/>} path="admin">
          <Route path='addmusic' element={<AddMusic/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

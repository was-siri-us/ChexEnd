import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbarbar from './components/Navbarbar'
import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import Register from '../src/pages/Register'
import DashBoard from '../src/pages/DashBoard'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'


//<----------------------------REPLACE WITH BACKEND URL------------------------------------->
axios.defaults.baseURL = 'https://chexmern.onrender.com'
axios.defaults.withCredentials = true;


function App() {
  return (
    <>

    <Navbarbar />
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <Routes>
      <Route path ='/' element={<Home />}/>
      <Route path ='/login' element={<Login />}/>
      <Route path ='/register' element={<Register />}/>
      <Route path ='/dashboard' element={<DashBoard />}/>
    </Routes>
      
    </>
  )
}

export default App

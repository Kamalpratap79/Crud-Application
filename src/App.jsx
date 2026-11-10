import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

//components
import Navbar from './components/NavBar';
import AllUser from './components/AllUsers';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import CodeforInterview from './components/CodeforInterview';

import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<CodeforInterview />} />
            <Route path='/all' element={<AllUser />} />
            <Route path='/add' element={<AddUser />} />
            <Route path='/edit/:id' element={<EditUser />} />
          </Routes>
        </BrowserRouter>
  );
}

export default App;

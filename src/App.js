import React from 'react';
import './app.scss';
import  Header  from './components/Header';
import { Routes,Route,BrowserRouter as Router } from 'react-router-dom';
import  Home  from './components/Home';
import  Users  from './components/Users';

export const App = () => { 
  return (
    <div className='app'>
      <Router>
            <Routes>
              <Route  path='/'  element={<Home />}/>
              <Route  path='/Home'  element={<Home />}/>
              <Route  path='/Users'  element={<Users />} />
            </Routes>
        </Router>    
    </div>
  )
}


export default App;

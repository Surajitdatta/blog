import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import Topbar from './topbar/Topbar';
import Single from './pages/single/Single';
import Write from './write/Write';
import Settings from './settings/Settings';
import Login from './login/Login';
import Sidebar from './sidebar/Sidebar';
import { useState, useEffect } from 'react';
import { BrowserRouter as BR, Routes, Route, useMatch } from 'react-router-dom';
import Contact from './contact/Contact';
import {Provider} from "react-redux";
import { appStore } from './redux/appStore';
const App =()=>{
  const{path , setPath} = useState(false)
  
  
 
  
  return(
   <Provider store = {appStore}>
    <div>
    
    <BR>
    {/* {path && <Topbar/>} */}
    <Topbar/>
      
      
      <Routes>
        {/* login */}
        <Route path="/" element={<Login/>}   />
        {/* home */}
        <Route path="/Home" element={<Home/>}/>
        {/* ABOUT */}
        <Route path="/Sidebar" element={<Sidebar/>}/>
        {/* Profile */}
        <Route path="/Contact" element={<Contact/>}/>
        {/* write */}
        <Route path="/Write" element={<Write/>}/>
        
        
        
      </Routes>
    </BR>

    </div>
   </Provider>
  )
}
export default App;
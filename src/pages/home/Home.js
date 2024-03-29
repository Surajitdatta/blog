import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import "./Home.css"
import {useSelector} from "react-redux";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  
  const[validation , setValidation] = useState(false)
  const getEmail = useSelector((store)=>store.login.items)
  const navigate=useNavigate()
 useEffect(()=>{
  if(getEmail.length>0){
    setValidation(true)
  }else{
    navigate("/")
  }
 }, [getEmail])


//  validation?  ::(
//   <>
    
//   </>
// )
  return validation && (
    <div>
        <Header/>
        <div className='home'>
          <Posts/>
          <Sidebar/>
        </div>
       
    </div>
  )
}

export default Home
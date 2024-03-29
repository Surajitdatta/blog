import React from 'react'
import "./Sidebar.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {useSelector} from "react-redux";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';












// import {useSelector} from "react-redux";
// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// const[validation , setValidation] = useState(false)
// const getEmail = useSelector((store)=>store.login.items)
// const navigate=useNavigate()
// useEffect(()=>{
// if(getEmail.length>0){
//   setValidation(true)
// }else{
//   navigate("/")
// }
// }, [getEmail])

























const Sidebar = () => {
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
  return validation && (
    
      <div className='sidebar' >
        <div className='sidebarItem'>
            <span className='sidebarTitle'>ABOUT ME</span>
            <img src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog.png" alt="" height="200px" />
            <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>

        </div>
        <div className='sidebarItems'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
               <li className='sidebarListItem'>Life</li>
               <li className='sidebarListItem'>Music</li>
               <li className='sidebarListItem'>Style</li>
               <li className='sidebarListItem'>Sport</li>
               <li className='sidebarListItem'>Tech</li>
               <li className='sidebarListItem'>Cinema</li>
            </ul>

        </div>
        <div className='sidebarItem'>
           <span className='sidebarTitle'>FOLLOW</span>
           <div className="sidebarSocial">
           <FaFacebook/>
            <FaTwitter />
            <FaPinterest />
            <FaInstagramSquare />


           </div>

        </div>
      </div>
    
  )
}

export default Sidebar
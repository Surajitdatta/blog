import React from 'react'
import "./Contact.css"
import { useSelector } from 'react-redux';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


         
const Contact = () => {
  const[validation , setValidation] = useState(false)
  const getLogin = useSelector((store)=>store.login.items)
  const getEmail = useSelector((store)=>store.login.items)
  const navigate=useNavigate()
  useEffect(()=>{
  if(getEmail.length>0){
    setValidation(true)
  }else{
    navigate("/")
  }
}, [getEmail])
  // const getProfile = useSelector((store)=>store.login.items)
  const getContent = useSelector((store)=>store.userContent.content)
  console.log("logins", getContent)

  return validation && (
    <div className='profile'>
      <div className='image'>
        {/* <img src="https://cdn.pixabay.com/photo/2016/04/13/19/29/binary-1327512_1280.jpg"/> */}
        <img src={getContent.length>0?getContent[0].img:`https://cdn.pixabay.com/photo/2016/04/13/19/29/binary-1327512_1280.jpg`}         />
        <br/>
        <b>EMAIL</b><br/>
        <i>{getLogin[0]}</i>
      </div>


      <div className="socialProfile">
        <ul>
          <li><FaFacebook/></li>
          <li><FaTwitter /></li>
          <li><FaPinterest /></li>
          <li><FaInstagramSquare /></li>
        </ul>
        
        
        
        


      </div>


    </div>
  )
}

export default Contact
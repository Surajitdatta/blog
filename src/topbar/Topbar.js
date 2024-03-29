import "./Topbar.css";
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { addContent } from '../redux/Contentslice';
const Topbar = () => {
  const profileImage = useSelector((store)=>store.userContent.content)
  console.log("god",profileImage)
  return (
    <>
      <div className="top">
        <div className="topLeft">
          
            <FaFacebook/>
            <FaTwitter />
            <FaPinterest />
            <FaInstagramSquare />

        </div>
        <div className="topCenter">
            <ul className="topList">
                <li ><Link to="/Home" className="a">HOME</Link></li>
                <li><Link to="/Sidebar" className="a">ABOUT</Link></li>
                <li><Link to="/Write" className="a">WRITE</Link></li>
                <li><Link to="/Contact" className="a">PROFILE</Link></li>
                
            </ul>
        </div>
        <div className="topRight">
            <img
              className="topImg"
              // src=
              src={profileImage.length>0?profileImage[0].img:`https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg`}

              alt=""
            />
            <FaSearch className="topIcon"/>

        </div>


      </div>
    </>
  )
}

export default Topbar;
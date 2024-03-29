import React from 'react'
import "./Write.css";
import { PiPlusCircle } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { addImg } from '../redux/Imgslice';
import { useSelector } from 'react-redux';
import { addContent } from '../redux/Contentslice';
import { useNavigate } from 'react-router-dom';
// import {useSelector} from "react-redux";

const Write = () => {
  const[title, setTitle] = useState("")
  const[story, setStory] = useState("")
  const[img, setImg] = useState(null)
  const[blog, setBlog] = useState("")

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


  const getImage = useSelector((store)=>store.userImage.img)
  const getContent = useSelector((store)=>store.userContent.content)
  const getUpdate = useSelector((store)=>store.userContent.update)
 
 
  
  const dispatch = useDispatch();
  
  const imageHandler = (e) =>{
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl)
    }
  }

  const titleContent = (e) =>{
    setTitle(e.target.value)

  }
  const storyContent = (e) =>{
    setStory(e.target.value)
  }

  const formHandler =(e)=>{
    e.preventDefault()
   
    const newData = {
      title:title,
      story : story,
      img:img

    }
    setBlog("Your blog is added...")
    
    dispatch(addContent(newData))
    setTitle("")
    setStory("")
    
   

  }
  return validation && (
    <>
      <div className='write'>
        
        
        <form className='writeForm' onSubmit={formHandler}>
          <div style={{width:"100%", textAlign:"center", fontFamily:"cursive"}}>
             {blog}

          </div>
          
            <div className='writeFormGroup'>
                <label for="fileInput" >
                    <PiPlusCircle className='fileInputIcon'/>
                </label>
                <input type="file" id="fileInput"  style={{display:"none"}} onChange={imageHandler}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} onChange={titleContent} value={title} required/>
                
            </div>
            <div className='writeFormGroup'>
                <textarea placeholder="Tell your story..." type="text" className='writeInput writeText' onChange={storyContent} value={story} required >
                </textarea>
            </div>
            <button className='writeSubmit' >Publish</button>

        </form>

      </div>
    </>
  )
}

export default Write;
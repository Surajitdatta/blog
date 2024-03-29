import React from 'react'
import "./Posts.css"
import Post from '../post/Post'
import { useSelector } from 'react-redux';
import { removeContent, updateContent  } from '../redux/Contentslice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Write from "../write/Write"
// import { updateContent } from '../redux/Contentslice';
const Posts = () => {
  const post = Array.from({length:6})
  const navigate = useNavigate()
  const getContent = useSelector((store)=>store.userContent.content)
  // console.log(getContent)
  
  const dispatch = useDispatch()

  const handleDelete=(item, index)=>{
    dispatch(removeContent(index))

  }

  



  return getContent.length===0?<h2>Please Add Some Blog</h2>:(
    <div className='mainPost'>
      <div className='posts'>
        {
          getContent.map((item , index)=>{
            return(
              <div className='content'>
                <img src={item.img} height="230px" width="170px" /><br/>
                <b>Title</b> : <br/>{item.title}<br/>
                <b>Story</b> : <br/>{item.story}<br/>
                <button className='delete' onClick={()=>{handleDelete(item, index)}}>Delete Post</button><br/>
                {/* <button className='update' onClick={()=>handleUpdate(item, index)}>Update Post</button> */}
                
{/* If you have a  where the text is overflowing in one line and you want it to wrap to the next line instead, you can achieve this by applying the CSS property word-wrap: break-word; to the div. Here's how you can do it: */}










              </div>
            )
          })
            
          
        }
        

      </div>
    </div>
  )
}

export default Posts
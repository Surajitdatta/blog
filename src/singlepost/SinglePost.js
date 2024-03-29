import "./SinglePost.css";
import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
const SinglePost = () => {
  return (
    <>
      <div className="singlePost">
         <div className="singlePostWrapper">
            <img 
            src="https://cdn.wallpapersafari.com/50/54/lH7nOY.jpg" 
            alt=""
            />
            
         </div>
         <h1>
         Lorem ipsum dolor sit amet.
         <div className="singlePostEdit">
            <FaRegEdit className="singlePostIcon"/>
            <MdOutlineDeleteOutline className="singlePostIcon"/>
         </div>
         </h1>
         <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Surajit Datta</b></span>
            <span className="singlePostDate"><i>1 hr ago</i></span>
         </div>
         <p className="singlePostDesc">
         "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

         </p>

      </div>
    </>
  )
}

export default SinglePost
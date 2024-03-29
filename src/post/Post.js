import React from 'react'
import "./Post.css"
const Post = () => {
  return (
    <>
      <div className='post'>
        <img src="https://images.pexels.com/photos/15746025/pexels-photo-15746025/free-photo-of-elderly-man-holding-a-flute.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""  />
        <div className='postInfo'>
            <div className='postCats'>
                <span className='postCat'>Music</span>
                <span className='postCat'>Life</span>
               

            </div>
            <span className='postTitle'>
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
            </span>
            <hr/>
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className='postDesc'>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."."Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."."Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."."Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...".</p>
      </div>
    </>
  )
}

export default Post
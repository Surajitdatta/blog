import React from 'react';
import "./Header.css";




const Header = () => {
  
  return (
    <>
      <div className="header">
        <div className='headerTitles'>
          <span className='headerTitlesm'>Smile and Enjoy</span>
          <span className='headerTitleLg'>Blog</span>

        </div>
        <img 
        src='https://cdn.pixabay.com/photo/2020/01/21/08/11/indian-temple-4782312_1280.jpg'
        alt=""

        />

      </div>
    </>
  )
}

export default Header;
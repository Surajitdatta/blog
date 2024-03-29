import React from 'react'
import "./Settings.css"
import Sidebar from '../sidebar/Sidebar'
import { CgProfile } from "react-icons/cg";
const Settings = () => {
  return (
    <>
      <div className='settings'>
        <div className='settingsrWrapper'>
            <div className='settingsTitle'>
                <span className='settingsUpdateTitle'>Update Your Account</span>
                <span className='settingsDeleteTitle'>Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className='settingsPP'>
                    <img 
                    src="https://i1.wp.com/problogger.com/wp-content/uploads/2016/06/photo-1457219818465-7c6bae383e6f.jpeg?w=500&ssl=1"


                    />
                    <label for ="fileInput">
                        <CgProfile className="settingsPPIcon"/>

                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}     />

                </div>
                <label >Username</label>
                <input type="text" placeholder="safak" required />
                <label >Email</label>
                <input type="email" placeholder="safak@gmail.com" required />
                <label >Password</label>
                <input type="password" required />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
        

      </div>
    </>
  )
}

export default Settings;
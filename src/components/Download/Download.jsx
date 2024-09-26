import React from 'react'
import download from "../../assets/Images/Download/download.png"
import "./Download.css"
import apple from '../../assets/Images/Download/apple.png'
import google from '../../assets/Images/Download/google.png'

const Download = () => {
  return (
    <>
    <h2 className='download-title'>Download Food Web Explorer Today!</h2>
    <div className='download'>
        <div className='download-left'>
            <img src={download} alt="" />
        </div>
        <div className='download-right'>
            <div className='download-text'>
                <h1>How it works?</h1>
                <p>1.Download & Install: Quick and free download on your iOS or Android device.</p>
                <p>2.Create Your Account: Sign up in seconds and start exploring our menu.</p>
                <p>3.Order Your Favorites: Choose delivery or pickup and enjoy fresh pizza made just for you!</p>
                <p>4.Earn Rewards: Collect points with every order and unlock delicious rewards.</p>
            </div>
            <div className='download-icon'>
              <a> <img src={apple} alt="" /></a> 
               <a><img src={google} alt="" /></a> 
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Download

import React from 'react'
import './SignInPage.css'
import IllustrationImage from '../../assests/Illustration.png'
import Google from '../../assests/Area [SIZE_MEDI (1).png'
import Facebook from '../../assests/Area [SIZE_MEDI.png'
import Indeed from '../../assests/Area [ICON_feat.png'
import Twitter from '../../assests/Path.png'

function SignInPage() {
  return (
    <div className='signInPage'>
        <div className="loginSec">
            <div className="loginContainer">
           <div className="h2Title">
             <h2>Sign In</h2>
           </div>
           <div className="newUser">
            <h4>New User ? <a href="">Create an account</a></h4>
           </div>
           <div className="formField">
            <div className="userNameField">
            <input type="text" className='input' placeholder='username or email'/>
            </div>
            <div className="passwordField">
            <input type="password" className='input' placeholder='password' />
            </div>
            <div className="keepMeField">
            <input type="checkbox" class="larger" checked style={{background:"white"}} />
            <p>Keep me signed in</p>
            </div>
            <div className="btnSec">
            <button>Sign In</button>
            </div>  
           </div>
           <div className="otherSignText">
              <div className="line"></div>
              <p>Or Sign In With</p>
              <div className="line"></div>
           </div>
           <div className="socialMediaIcons">
             <img src={Twitter} alt="" />
             <img src={Twitter} alt="" />
             <img src={Twitter} alt="" />
             <img src={Twitter} alt="" />
           </div>
           </div>
        </div>
        <div className="illustrationSec">
            <div className="IllustrationImage">
            <img src={IllustrationImage} alt="IllustrationImage" />
            </div>
           
        </div>
    </div>
  )
}

export default SignInPage
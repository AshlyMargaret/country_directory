import React from 'react'
import './SignInPage.css'
import IllustrationImage from '../../assests/Illustration.png'
import Twitter from '../../assests/Path.png'
import  { useState } from 'react'
import { useNavigate} from 'react-router-dom';

function SignInPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = (e)=>{
    e.preventDefault();
    if(username.trim()==="" || password.trim() ==""){
      setErrorMessage("Required both field")
    }
    else{
      navigate('/home');    
      
    }
  }
  return (
    <div className='signInPage'>
        <div className="loginSec">
            <div className="loginContainer">
           <div className="h2Title">
             <h2>Sign In</h2>
           </div>
           <div className="newUser">
            <h4>New User ? <a href="#" className='createAccount'>Create an account</a></h4>
           </div>
           <div className="formField">
            <div className="userNameField">
            <input type="text" className='input' placeholder='username' value={username} onChange={(e)=>{
              setUserName(e.target.value)
              console.log("username",username);
            }} />
            </div>
            
            <div className="passwordField">
            <input type="password" className='input' placeholder='password' value={password} onChange={(e)=>{
              setPassword(e.target.value)
              console.log("password",password);
            }} />
            </div>
            {errorMessage && <div className="error"> {errorMessage} </div>}
            <div className="keepMeField">
            <input type="checkbox" class="larger"  style={{background:"white"}} />
            <p>Keep me signed in</p>
            </div>
            <div className="btnSec">
             <button type='submit'  onClick={onSubmit}>Sign In</button>
            </div>  
           </div>
           <div className="otherSignText">
              <div className="line"></div>
              <p>Or Sign In With</p>
              <div className="line"></div>
           </div>
           <div className="socialMediaIcons">
           <i class="fa-brands fa-google"></i>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-linkedin"></i>
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
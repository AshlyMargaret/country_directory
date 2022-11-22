import React from 'react'
import Twitter from '../../assests/Path.png'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
       <div className="socialIcons">
           <i class="fa-brands fa-google"></i>
           <i class="fa-brands fa-facebook"></i>
           <i class="fa-brands fa-linkedin"></i>
             <img src={Twitter} alt="" />
       </div>
       <p>Example@email.com</p>
       <h4>Designed And Developed By Ashly Margaret</h4>
       <h4>ashlymargaret030@gmail.com</h4>
    </div>
  )
}

export default Footer
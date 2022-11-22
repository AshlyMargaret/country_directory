import React from 'react'
import './HomePage.css'
import Dummy from "../../assests/Path.png";

function HomePage() {
  return (
    <div className='homePage'>
        <div className="container">
        <div className="homePageHeader">
            <div className="headerTitle">
             <h2>Countries</h2>
            </div>
            <div className="homePageTab">
             <a href="#">All</a>
             <a href="#">Asia</a>
             <a href="#">Europe</a>
           </div>
       </div>  
        <div className="countryDetails">
            <div className="countryData">
                <div className="box1">
                    <img src={Dummy} alt="" />
                </div>
                <div className="box2">
                    <div className="countryName">
                        <h3>fgg</h3>
                    </div>
                    <div className="region">
                        <h6>ggg</h6>
                    </div>
                </div>
            </div>

            <div className="countryData">
                <div className="box1">
                    <img src={Dummy} alt="" />
                </div>
                <div className="box2">
                    <div className="countryName">
                        <h3>fgg</h3>
                    </div>
                    <div className="region">
                        <h6>ggg</h6>
                    </div>
                </div>
            </div>
            <div className="countryData">
                <div className="box1">
                    <img src={Dummy} alt="" />
                </div>
                <div className="box2">
                    <div className="countryName">
                        <h3>fgg</h3>
                    </div>
                    <div className="region">
                        <h6>ggg</h6>
                    </div>
                </div>
            </div>
            <div className="countryData">
                <div className="box1">
                    <img src={Dummy} alt="" />
                </div>
                <div className="box2">
                    <div className="countryName">
                        <h3>fgg</h3>
                    </div>
                    <div className="region">
                        <h6>ggg</h6>
                    </div>
                </div>
            </div>
        </div>   
        </div>
       
    </div>
  )
}

export default HomePage
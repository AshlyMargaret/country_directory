import React, { useState,useEffect } from 'react'
import './HomePage.css'
import Dummy from "../../assests/Path.png";
import axios from 'axios'
import Footer from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';

function HomePage() {
    
  const[show,setShow] = useState(false)
  const [data,setData] = useState([]);

  useEffect(() => {
      axios.get('https://restcountries.com/v2/all?fields=name,region,flag').then((response)=>{
         console.log(response.data);
         setData(response.data)
         console.log("data",data);     
        })
  }, [])

    const getData = ()=>{

        axios.get('https://restcountries.com/v2/all?fields=name,flag,region="Asia"').then((response)=>{
         console.log(response.data);
         setData(response.data)
         console.log("data",data);     
        })
    }
  return (
    <div className='homePage'>
        <div className="container">
        <div className="homePageHeader">
            <div className="headerTitle">
             <h2>Countries</h2>
            </div>
            <div className="homePageTab">
             <a href="#" >All</a>
             <a href="#" onClick={getData}>Asia</a>
             <a href="#" onClick={getData}>Europe</a>
           </div>
         

           {
            show ?
            <div className="hideTab">
            <div className="close" onClick={()=>{
                setShow(false)
            }}>
            <i class="fa-solid fa-square-xmark"></i>
            </div>
            <div className="hideMenu">
            <a href="#" >All</a>
             <a href="#" onClick={getData}>Asia</a>
             <a href="#" onClick={getData}>Europe</a>
            </div>
           </div> : null
           }
             <div className="menu" onClick={()=>{
            setShow(true)
            console.log("show",show);
            console.log("hiii");
           }} ><i class="fa-solid fa-bars" ></i>
           </div>
           
       </div>  
        <div className="countryDetails">
            {
              data.map((obj,index)=>{
                return(
                    <div className="countryData" key={index}>
                    <div className="box1">
                        <img src={obj.flag} alt="" />
                    </div>
                    <div className="box2">
                        <div className="countryName">
                            <h3>{obj.name}</h3>
                        </div>
                        <div className="region">
                            <h6>{obj.region}</h6>
                        </div>
                    </div>
                </div>
                )
              })  
            }
           

          
            
        </div>   
        </div>
        <div className="footerSection">
        <Footer/>
        </div>
        <div className="backBtn">
        <Link to="/"> <button>Back</button></Link>    
        </div>  
    </div>
  )
}

export default HomePage
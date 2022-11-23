import React, { useState, useEffect } from 'react'
import './HomePage.css'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function HomePage() {

    const [show, setShow] = useState(false)
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [countries, setCountries] = useState([])




    useEffect(() => {
        getCountriesListApi();
    }, [])

    const getCountriesListApi = (region = "all") => {
        axios.get(`https://restcountries.com/v2/${region}?fields=name,region,flag`).then((response) => {
            setFilteredCountries(response.data)
            setCountries(response.data)

        })
    }

    const filtrCountriesByRegion = (region) => {
        return countries.filter((country) => {
            if (country.region == region) {
                return country
            } else {
                return
            }
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
                        <a href="#" onClick={() => {
                            getCountriesListApi()  // default will be all countries
                            // setFilteredCountries(countries) 
                        }} >All</a>
                        <a href="#" onClick={() => {
                            // getCountriesListApi("region/asia")
                            setFilteredCountries(filtrCountriesByRegion("Asia"))

                        }}>Asia</a>
                        <a href="#" onClick={() => {
                            getCountriesListApi("region/europe")
                        }}>Europe</a>
                    </div>


                    {
                        show ?
                            <div className="hideTab">
                                <div className="close" onClick={() => {
                                    setShow(false)
                                }}>
                                    <i class="fa-solid fa-square-xmark"></i>
                                </div>
                                <div className="hideMenu">
                                    <a href="" onClick={() => {
                                        getCountriesListApi()  // default will be all countries
                                        // setFilteredCountries(countries) 
                                    }} >All</a>
                                    <a href="" onClick={() => {
                                        // getCountriesListApi("region/asia")
                                        setFilteredCountries(filtrCountriesByRegion("Asia"))

                                    }}>Asia</a>
                                    <a href="" onClick={() => {
                                        getCountriesListApi("region/europe")
                                    }}>Europe</a>
                                </div>
                            </div> : null
                    }
                    <div className="menu" onClick={() => {
                        setShow(true)
                    }} ><i class="fa-solid fa-bars" ></i>
                    </div>

                </div>
                <div className="countryDetails">
                    {
                        filteredCountries.map((country, index) => {
                            return (
                                <div className="countryData" key={index}>
                                    <div className="box1">
                                        <img src={country.flag} alt="" />
                                    </div>
                                    <div className="box2">
                                        <div className="countryName">
                                            <h3>{country.name}</h3>
                                        </div>
                                        <div className="region">
                                            <h6>{country.region}</h6>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="footerSection">
                <Footer />
            </div>
            <div className="backBtn">
                <Link to="/"> <button>Back</button></Link>
            </div>
        </div>
    )
}

export default HomePage
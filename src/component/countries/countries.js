import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './coutries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className='countries-style'>
            {countries.map(country => <Country 
            key={country.official}
            country={country}
            ></Country>)}
        </div>
    );
};

export default Countries;
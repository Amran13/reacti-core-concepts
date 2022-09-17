import React from 'react';
import './country.css'

const Country = (props) => {
    const {name, capital,flags} = props.country;
    return (
        <div>
            <div className='country-style'>
                <img src={flags.png} alt=""/>
                <h4>{name.common}</h4>
                <p>{capital}</p>
            </div>
        </div>
    );
};

export default Country;
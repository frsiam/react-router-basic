import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Country = () => {
    const {countryName} = useParams()
    const [country, setCountry] = useState([])
    useEffect(()=>{
        const url = `https://restcountries.com/v3.1/name/${countryName}`
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data))
    },[countryName])
    console.log(country)
    return (
        <div>
            <h1 className='text-4xl mt-8 text-fuchsia-600 font-serif font-semibold'>Welcome to {countryName}</h1>
            <img src={country[0].flags.png} alt="" />
        </div>
    );
};

export default Country;
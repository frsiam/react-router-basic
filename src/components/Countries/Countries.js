import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Welcome to My world</h1>
            <p>Total countries: {countries.length}</p>
            {
                countries.map(country =><li className='hover:text-black my-2 text-xl text-blue-600 font-medium'><Link key={country.ccn3} to={`/country/${country.name.common}`} element={<Country></Country>}>{country.name.common}</Link></li> )
            }
        </div>
    );
};

export default Countries;
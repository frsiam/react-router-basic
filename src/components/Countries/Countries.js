import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <div className='border border-emerald-400 mx-40 my-5 rounded-md py-3 bg-fuchsia-300 text-2xl font-sans font-semibold'>
                <h1>Welcome to My world</h1>
                <p>Total countries: {countries.length}</p>
            </div>
            {
                countries.map(country => <Country key={country.ccn3} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;
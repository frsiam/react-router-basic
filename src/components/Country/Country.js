import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Country = (props) => {
    console.log(props.country)
    const {name,flags,population,area,ccn3} = props.country
    // console.log(name.common)
    let navigate = useNavigate()
    const showCountryDetail = () => {
        const path = `/country/${name.common}`
        navigate(path)
    }
    return (
        <div>
            <h1 className='text-2xl my-3 font-semibold'>Name: <span className='text-3xl text-orange-500 hover:text-blue-500'>{name?.common}</span></h1>
            <Link to={`/country/${name.common}`}>Details</Link>
            <button onClick={showCountryDetail} className='bg-cyan-400 px-3 py-2 rounded-lg font-semibold'>Show Details {ccn3}</button>
        </div>
    );
};

export default Country;
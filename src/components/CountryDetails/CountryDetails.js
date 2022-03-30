import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const {countryName} = useParams()
    const [country, setCounty] = useState({})
    return (
        <div>
            <h1>welcome <span className='text-3xl text-lime-600 font-semibold'>{countryName}</span></h1>
        </div>
    );
};

export default CountryDetails;
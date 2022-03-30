import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';

const About = () => {
    return (
        <div>
            <h1>This is <span className='text-2xl text-green-500 font-medium'>About</span> us</h1>
            <p>Wanna know about us ?</p>
            <small>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae iure ad enim animi optio. Porro impedit ex enim numquam expedita doloremque est eaque!</small><br></br>
            <Link to="/" element={<Home></Home>}>Go to <span className='text-blue-500 font-bold text-xl'>Home</span></Link>
        </div>
    );
};

export default About;
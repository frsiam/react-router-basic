import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <h3>This is my <span className='text-3xl text-lime-500 font-semibold font-mono'>Home</span></h3>
            <p>Where we enjoining our holidays</p>
            <nav>
                <Link to="about" element={<About></About>}>Go to <span className='text-blue-500 font-bold text-xl'>About</span></Link>
            </nav>
        </div>
    );
};

export default Home;
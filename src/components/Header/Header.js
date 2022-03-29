import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1 className='text-4xl my-8 text-violet-500'>Hello From Router</h1>
            <nav className='bg-gray-500 py-3 flex justify-center'>
                <CustomLink to='/' className='mr-8 text-orange-400 font-semibold hover:text-purple-700 text-xl bg-green-200 px-3 py-1 rounded-lg'>Home</CustomLink>
                <CustomLink to='/friends' className='mr-8 text-orange-400 font-semibold hover:text-purple-700 text-xl bg-green-200 px-3 py-1 rounded-lg'>Friends</CustomLink>
                <CustomLink to='/about' className='mr-8 text-orange-400 font-semibold hover:text-purple-700 text-xl bg-green-200 px-3 py-1 rounded-lg'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;
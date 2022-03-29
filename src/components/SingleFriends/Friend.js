import React from 'react';

const Friend = (props) => {
    const {name,username, id} = props.friend
    return (
        <div className='my-8'>
            <h1 className='text-2xl font-semibold my-4'>Name: {name}</h1>
            <button className='bg-blue-400 hover:bg-blue-800 hover:text-yellow-200 px-6 py-2 rounded-lg font-serif font-semibold'>{username} <span className='text-yellow-300 ml-2'>{id}</span></button>
        </div>
    );
};

export default Friend;
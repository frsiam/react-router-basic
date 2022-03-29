import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username, id} = props.friend
    const navigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
    } 
    return (
        <div className='my-8'>
            <h1 className='text-2xl font-semibold my-4'>Name: {name}</h1>
            <button onClick={showFriendDetail} className='bg-blue-400 hover:bg-blue-800 hover:text-yellow-200 px-6 py-2 rounded-lg font-serif font-semibold'>{username} <span className='text-yellow-300 ml-2'>{id}</span></button>
        </div>
    );
};

export default Friend;
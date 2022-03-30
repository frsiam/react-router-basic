import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Friends from '../Friends/Friends';

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    console.log(friend.address?.street)
    return (
        <div>
            <h1 className='text-2xl font-semibold text-green-500'>This Detail About Friend: {friendId}</h1>
            <Link to='/friends' element={<Friends></Friends>}>Go to <span className='text-blue-500 font-bold text-xl'>Friends</span></Link>
            <h1>Name: {friend.name}</h1>
            <h2>Phone: {friend.phone}</h2>
            <h1>Website: {friend.website}</h1>
            <h2>Address:</h2>
            <p>Street-{friend.address?.street} Lat: {friend.address?.geo?.lat}</p>
        </div>
    );
};

export default FriendDetail;
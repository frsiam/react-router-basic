import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Friend from '../SingleFriends/Friend';

const Friends = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <h3>Hello <span className='text-xl text-red-500 font-serif font-semibold'>Friends</span> !! How are you</h3>
            <p>Tore je ami kotto mis kori.....kembai choltese tor ?</p>
            <p>Total user: {friends.length}</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Friends from '../Friends/Friends';

const FriendDetail = () => {
    const {friendId} = useParams()
    return (
        <div>
            <h1 className='text-2xl font-semibold text-green-500'>This Detail About Friend: {friendId}</h1>
            <Link to='/friends' element={<Friends></Friends>}>Go to <span className='text-blue-500 font-bold text-xl'>Friends</span></Link>
        </div>
    );
};

export default FriendDetail;
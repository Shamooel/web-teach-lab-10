import React from 'react';
import { useParams } from 'react-router-dom';
function User() {
const { userId } = useParams();
return <h1 className='User'>This is Profile of User: {userId}</h1>;
}
export default User;
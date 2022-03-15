import { useContext } from 'react';
import { randomUserContext } from '../context/randomUserContext';

const Users = () => {

    const usersData = useContext(randomUserContext);
    console.log(usersData);

    return (
        <h1>Users</h1>
    )
}

export default Users;
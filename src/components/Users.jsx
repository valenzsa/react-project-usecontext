import { useContext } from 'react';
import { randomUserContext } from '../context/randomUserContext';
import User from '../components/User';
import styled from 'styled-components';

const StyledUsers = styled.div`
    
`;

const Users = () => {

    const usersData = useContext(randomUserContext);
    //console.log(usersData);

    return (
        <div className="users-container">
            {
                usersData.map((data) => {
                    return <User data={data} />
                })
            }
        </div>
    )
}

export default Users;
import { useContext } from 'react';
import { randomUserContext } from '../context/randomUserContext';
import User from '../components/User';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const StyledUsersContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Users = () => {

    const usersData = useContext(randomUserContext);
    //console.log(usersData);

    return (
        <StyledUsersContainer className="users-container">
            {
                usersData.map((data) => {
                    return <User data={data} key={uuidv4()} />
                })
            }
        </StyledUsersContainer>
    )
}

export default Users;
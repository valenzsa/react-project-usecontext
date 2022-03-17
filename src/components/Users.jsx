import { useContext } from 'react';
import { randomUserContext } from '../context/randomUserContext';
import User from '../components/User';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Users = () => {

    const usersData = useContext(randomUserContext);
    //console.log(usersData);

    return (
        <StyledUsersContainer className="row mb-2">
            {
                usersData.map((data) => {
                    return <User data={data} key={uuidv4()} />
                })
            }
        </StyledUsersContainer>
    )
}

const StyledUsersContainer = styled.div`
    
`;

export default Users;
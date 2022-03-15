import styled from 'styled-components';

const StyledUser = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 15px;
`;

const User = ({ data }) => {
    console.log(data);

    return (
        <StyledUser className="user">
            <h1>{data.first_name}</h1>
        </StyledUser>
    )
}

export default User;
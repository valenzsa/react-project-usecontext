import styled from 'styled-components';

const StyledUser = styled.div`

`;

const User = ({ data }) => {
    console.log(data);

    return (
        <div className="user">
            <h1>{data.first_name}</h1>
        </div>
    )
}

export default User;
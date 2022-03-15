import styled from 'styled-components';

const User = ({ data }) => {
    console.log(data);

    return (
        <StyledUser className="user" style={{ background: `url(${data.avatar}) no-repeat center center` }}>
            <h2>{data.first_name} {data.last_name}</h2>
        </StyledUser>
    )
}

const StyledUser = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    border-radius: 15px;
    h2 {
        text-align: center;
        position: relative;
        overflow: hidden;
        &:after {
            content: '';
            background: #ffcc00;
            opacity: .6;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
        }
    }
`;

export default User;
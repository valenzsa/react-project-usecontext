import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav className="list-unstyled">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </StyledNav>
    )
}

const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    li {
        a {
            text-decoration: none;
            &:hover {
            
            }
        }
    }
`;

export default Nav;
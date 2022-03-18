import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="logo d-flex align-items-center mb-2 mb-lg-0 text-decoration-none">
                        <span className="fs-4">Robohash</span>
                    </a>

                    <ul className="nav col-12 col-lg-auto ms-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li>
                            <Link to="/users" className="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.header`
    background: var(--gray-06-dark-2);
    .logo {
        color: var(--blue0);
    }
    ul {
        li {
            a {
                color: var(--blue0);
                &:hover {
                    color: var(--blue0);
                    text-decoration: underline;
                }
                &:focus {
                    color: var(--blue0);
                }
            }
        }
    }
`;

export default Nav;
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav className="navigation-container">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4">Robohash</span>
                    </a>

                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to="/users" className="nav-link">Users</Link></li>
                    </ul>
                </header>
            </div>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    background: #fff;
`;

export default Nav;
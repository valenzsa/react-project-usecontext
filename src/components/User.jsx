import styled from 'styled-components';

const User = ({ data }) => {
    console.log(data);

    const { zip_code } = data.address;

    let zipCode = zip_code.slice(0, 5);
    console.log(zipCode);


    return (
        <StyledUser className="col-md-4">
            <div className="row card g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-3">{data.first_name} {data.last_name}</h3>
                    <ul className="list-unstyled mb-3">
                        <li>{data.address.street_address}</li>
                        <li>{data.address.city}, {data.address.state} {zipCode}</li>
                    </ul>
                    <ul className="list-unstyled mb-3">
                        <li>{data.phone_number}</li>
                        <li>{data.email}</li>
                    </ul>
                </div>
                <div className="col-auto img-container">
                    <img className="img-fluid" src={data.avatar} />
                </div>
            </div>
        </StyledUser>
    )
}

const StyledUser = styled.div`
    .card {
        background: var(--gray-06-dark-2);
        border: 1px solid var(--blue0) !important;
        &:hover {
            background: var(--blue0);
            h3 {
                color: var(--gray-01-dark);
            }
            ul {
                li {
                    color: var(--gray-01-dark);
                }
            }
        }
        h3 {
            color: #dfdfdf;
            font-size: 1.2rem;
        }
        ul {
            li {
                color: #dfdfdf;
                font-size: 0.8rem;
            }
        }
        .img-container {
            display: flex;
            align-items: end;
            img {
                max-width: 150px;
            }
        }
    }
`;

export default User;
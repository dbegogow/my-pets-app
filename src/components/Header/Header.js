import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
    background: #341978;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavigateButton = styled(Link)`
    background: #3BD2CD;
    color: #1C2D66;
    font-weight: 600;
    border-radius: 12px;
    padding: 10px;
    border: 3px solid #9DE481;
    margin-right: 7%;
`;

const Title = styled.h1`
    color: white;
    margin-left: 7%;
`;

const Header = (props) => {
    return (
        <Wrapper>
            <Title>Wellcome to Home Page</Title>
            <NavigateButton to="/dashboard">Go to Dashboard</NavigateButton>
        </Wrapper>
    );
};

export default Header;
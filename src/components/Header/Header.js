import styled from 'styled-components';

const Wrapper = styled.div`
    background: #341978;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled.button`
    background: #3BD2CD;
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
            <Button>Go to Dashboard</Button>
        </Wrapper>
    );
};

export default Header;
import styled from 'styled-components';

const Content = styled.div`
    background: url('https://cdn.omlet.co.uk/images/originals/how-many-rabbits.jpg');
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: 65%;
    height: 88vh;
`;

const Title = styled.h1`
    text-align: center;
    font-size: 45px;
    padding-top: 4%;
`;

const Home = () => {
    return (
        <Content>
            <Title>Welcome to pet my pet!</Title>
        </Content>
    );
};

export default Home;
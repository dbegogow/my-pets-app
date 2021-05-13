import styled from 'styled-components';
import CategoryButton from './CategoryButton';

const Content = styled.div`
    background: #98BEBB;
    height: 88vh;
`;

const Title = styled.h1`
    margin: 0;
    padding-top: 4%;
    text-align: center;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 4%;
    justify-content: center;
`

const ArticlesWrapper = styled.article`
`;

const Dashboard = () => {
    return (
        <Content>
            <Title>Dashboard</Title>
            <ButtonsWrapper>
                <CategoryButton category="rabbits">Rabbits</CategoryButton>
                <CategoryButton category="cats">Cats</CategoryButton>
                <CategoryButton category="pony">Ponies</CategoryButton>
                <CategoryButton category="ducks">Ducks</CategoryButton>
                <CategoryButton category="fishes">Fishes</CategoryButton>
            </ButtonsWrapper>
        </Content>
    );
};

export default Dashboard;
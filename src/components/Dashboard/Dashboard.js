import { useState, useEffect } from 'react';
import { getRabbits } from '../../services/getAnimals';
import styled from 'styled-components';
import Article from './Article';
import CategoryButton from './CategoryButton';

const Content = styled.div`
    background: #98BEBB;
    min-height: 88vh;
`;

const Title = styled.h1`
    margin: 0;
    padding-top: 6%;
    text-align: center;
    font-size: 45px;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    margin-top: 4%;
    justify-content: center;
`

const ArticlesWrapper = styled.article`
    display: flex;
    margin-top 6%;
    justify-content: center;
    flex-wrap: wrap;
            <ButtonsWrapper>
`;

const Dashboard = () => {
    const [state, setState] = useState({});

    useEffect(() => {
        getRabbits().then(res => setState(res));
    }, {});

    console.log(state);

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
            <ArticlesWrapper>

            </ArticlesWrapper>
        </Content>
    );
};

export default Dashboard;
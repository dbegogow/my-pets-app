import { useState, useEffect } from 'react';
import getAnimals from '../../services/getAnimals';
import styled from 'styled-components';
import Article from './Article';
import CategoryButton from './CategoryButton';

const Content = styled.div`
    background: #98BEBB;
    min-height: 95vh;
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
    const [state, setState] = useState([]);

    useEffect(() => {
        loadindAnimals('rabbits');
    }, []);

    function loadindAnimals(animals) {
        getAnimals(animals).then(res => setState(res));
    }

    return (
        <Content>
            <Title>Dashboard</Title>
            <ButtonsWrapper>
                <CategoryButton clickHandler={() => loadindAnimals('rabbits')}>Rabbits</CategoryButton>
                <CategoryButton clickHandler={() => loadindAnimals('cats')}>Cats</CategoryButton>
                <CategoryButton clickHandler={() => loadindAnimals('pony')}>Ponies</CategoryButton>
                <CategoryButton clickHandler={() => loadindAnimals('ducks')}>Ducks</CategoryButton>
                <CategoryButton clickHandler={() => loadindAnimals('fishes')}>Fishes</CategoryButton>
            </ButtonsWrapper>
            <ArticlesWrapper>
                {state.map(x => {
                    return (
                        <Article
                            key={x.id}
                            category={x.category}
                            image={x.image}
                            name={x.name}
                        >
                            {x.description}
                        </Article>
                    );
                })}
            </ArticlesWrapper>
        </Content>
    );
};

export default Dashboard;
import styled from 'styled-components';
import Article from './Article';
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
    display: flex;
    margin-top 6%;
    justify-content: center;
    flex-wrap: wrap;
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
            <ArticlesWrapper>
                <Article name="Marcy" category="Rabbit" image="https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Rabbit%20860x500.jpeg?itok=OvX2YuHA">Marcy is 2 years old and it is the best bunny!</Article>
                <Article name="Topcho" category="Rabbit" image="https://www.naturepl.com/cache/pcache2/01571568.jpg">Topcho is sweet male bunny!</Article>
                <Article name="Marcy" category="Rabbit" image="https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Rabbit%20860x500.jpeg?itok=OvX2YuHA">Marcy is 2 years old and it is the best bunny!</Article>
                <Article name="Topcho" category="Rabbit" image="https://www.naturepl.com/cache/pcache2/01571568.jpg">Topcho is sweet male bunny!</Article>
                <Article name="Marcy" category="Rabbit" image="https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Rabbit%20860x500.jpeg?itok=OvX2YuHA">Marcy is 2 years old and it is the best bunny!</Article>
                <Article name="Topcho" category="Rabbit" image="https://www.naturepl.com/cache/pcache2/01571568.jpg">Topcho is sweet male bunny!</Article>
                <Article name="Marcy" category="Rabbit" image="https://www.scottishspca.org/sites/default/files/styles/full_content/public/2019-09/Rabbit%20860x500.jpeg?itok=OvX2YuHA">Marcy is 2 years old and it is the best bunny!</Article>
                <Article name="Topcho" category="Rabbit" image="https://www.naturepl.com/cache/pcache2/01571568.jpg">Topcho is sweet male bunny!</Article>
            </ArticlesWrapper>
        </Content>
    );
};

export default Dashboard;
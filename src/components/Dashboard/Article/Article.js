import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 15%;
    margin-right: 4%; 
`;

const Title = styled.h2`
    text-align: center;
`

const Category = styled.h4`
    text-align: center;
`;

const Image = styled.img`
    width: 100%;
    height: 50%;
`;

const DescriptionTitle = styled.h4`
    margin-bottom: 7px;
`;

const Article = (props) => {
    return (
        <Wrapper>
            <Title>Name: {props.name}</Title>
            <Category>Category: {props.category}</Category>
            <Image src={props.image} />
            <DescriptionTitle>Description:</DescriptionTitle>
            <div>{props.children}</div>
        </Wrapper>
    );
};

export default Article;
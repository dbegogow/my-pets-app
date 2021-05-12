import styled from 'styled-components';

const Wrapper = styled.div`
    background: #341978;
    color: white;
    position:fixed;
    bottom:0;
    width:100%;
    height:60px;
    text-align: center;
`;

const Footer = () => {
    return (
        <Wrapper>
            &copy;MyPetsApp
        </Wrapper>
    );
};

export default Footer;
import styled from 'styled-components';

const Button = styled.button`
    background: #7FCC32;
    color: #23106B;
    font-size: 20px;
    padding: 10px;
    border-radius: 9px;
    border: 3px solid #77B638;
    margin-right: 20px;
`;

const CategoryButton = (props) => {
    return <Button>{props.children}</Button>
};

export default CategoryButton;
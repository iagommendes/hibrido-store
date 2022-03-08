import styled from 'styled-components';

export const Container = styled.header`
    background: #fff;
    box-shadow: 0px 13px 18px -12px rgba(0,0,0,0.2);

    img {
        width: 100px;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    align-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;

    div {
        width: 511px;
        display: flex;
        justify-content: space-around;
    }

    input {
        padding: 0.5rem;
        border-radius: 1rem;
    }

`;
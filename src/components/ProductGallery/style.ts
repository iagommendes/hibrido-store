import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1191px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: center;
`;

export const ProductCollumn = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    width: 126px;
    align-items: center;

    img {
        width: 100px;
        height: 100px;
        margin-bottom: 1rem;
    }
`;



export const ProductImage = styled.div`

    img {
        width: 100%;
        height: 100%;
    }
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 500px;
    justify-content: space-between;
`;

export const ProductRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 126px;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
`;

export const Share = styled.div`
    display: flex;
    flex-direction: row;
    width: 126px;
    align-items: center;

    img {
        width: 20px;
        height: 20px;
        margin-right: 0.5rem;
    }
`;

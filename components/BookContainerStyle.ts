import styled from 'styled-components';

export const BookContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 10px;
    width: 200px; 
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 

    &.small{
        width:200px;
        &:hover {
        transform: scale(1.05); 
        }
    }
    &.big{
        width:600px;
        &:hover {
        transform: scale(1.05); 
        }
    }
`;
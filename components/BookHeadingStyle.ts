import styled from "styled-components"

export const BookTitle = styled.h3`
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
    margin-top: 1px;
    text-align: center;
    font-family: 'Georgia', serif; 
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); 
    letter-spacing: 1px;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: #ff4500; 
    }
`;
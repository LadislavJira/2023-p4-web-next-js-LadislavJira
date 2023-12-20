import styled from 'styled-components';
export const FancyHeading = styled.h1`
    font-size: 3em;
    margin-bottom: 20px;
    text-align: center;
    font-family: 'Georgia', serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out; 

    &.black{
        color: #333;

        &:hover {
        color: #ff4500;
        transform: scale(1.1); /* Scale the text on hover */
        }
    }
    &.red{
        color: #ff0000;

        &:hover {
        color: #ff4500;
        transform: scale(1.1); /* Scale the text on hover */
        }
    }
`;
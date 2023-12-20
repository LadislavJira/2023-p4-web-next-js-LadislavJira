import styled from "styled-components"

export const ButtonContainer = styled.button`

    padding: 10px 20px;
    border-radius: 5px;
    border: 1 px solid #fff;
    cursor: pointer;
    &.small {
        width: 100px;
    }
    &.medium {
        width: 150px;
    }
    &.large {
        width: 200px;
    }
    &.extra-large{
        width: 300px;
    }
    &.black {
        background-color: #000;
        color: #fff;

        &:hover {
            background-color: #fff;
            color: #000;
        }
    }

    &.red {
        background-color: #ff0000;
        color: #fff;

        &:hover {
            background-color: #fff;
            color: #ff0000;
        }
    }

    &.green {
        background-color: #00ff00;
        color: #000;

        &:hover {
            background-color: #000;
            color: #00ff00;
        }
    }

    &.blue {
        background-color: #0000ff;
        color: #fff;

        &:hover {
            background-color: #fff;
            color: #0000ff;
        }
    }
`
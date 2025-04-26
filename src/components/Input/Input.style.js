import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    margin: 10px;
    color: ${props => props.$inputColor || "#BF4F74"};
    background: papayawhip;
    border: none;
    border-radius: 4px;
`

export {
    Input
}
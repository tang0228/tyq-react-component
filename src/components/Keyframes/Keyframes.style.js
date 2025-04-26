import styled, { keyframes } from "styled-components";

const move = keyframes`
    from{
        transform:rotate(0deg);  
    }  
    to{
        transform :rotate(360deg);
    }
`

const KeyframesBox = styled.div`
    animation: ${move} 2s linear infinite;
    background-color: #007bff;
    width: 100px;
    height: 100px;
`

export {
    KeyframesBox
}
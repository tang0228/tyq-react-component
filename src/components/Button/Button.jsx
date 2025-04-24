import React from 'react';
import StyledButton from './Button.styles.js';

const Button = ({ children, onClick }) => {
    console.log(children, 'asdsadsad');
    
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
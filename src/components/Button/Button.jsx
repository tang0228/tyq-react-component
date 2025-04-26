import React from 'react';
import { Button, PrimaryButton } from './Button.styles';

const TButton = ({ children, onClick, ...args }) => {
    return (
        <>
            <Button {...args} $primary onClick={onClick}>
                {children}
            </Button>
        </>

    );
};

export default TButton;
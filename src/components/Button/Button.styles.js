import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  // ${props => props.$primary && css`
  //   background-color: #28a745;

  //   &:hover {
  //     background-color: #218838;
  //   }
  // `}
  // }
`;

const PrimaryButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`

// const SecondaryButton = props => <Button {...props} children={props.children.split('').reverse()} />;

export {
  Button,
  PrimaryButton, 
}

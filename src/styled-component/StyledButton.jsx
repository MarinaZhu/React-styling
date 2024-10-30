import styled from 'styled-components';

// Create a styled button
const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Button component that uses the styled button
const StyledButton = ({ children }) => {
  return <Button>{children}</Button>;
};

export default StyledButton;

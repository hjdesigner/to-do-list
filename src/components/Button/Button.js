import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...props }) => (
  <ButtonField {...props}>
		{children}
	</ButtonField>
);

const ButtonField = styled.button`
	width: 100%;
	border: 0;
`;

export default Button;
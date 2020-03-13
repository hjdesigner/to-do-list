import React from 'react';
import styled from 'styled-components';

const Input = ({ name, title, ...props }) => (
  <Element>
    <Label htmlFor={name}>{title}</Label>
    <Field type='text' name={name} {...props} />
  </Element>
);

const Element = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Label = styled.label`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4em;
  margin-bottom: ${({ theme }) => theme.spaces}px;
  width: 100%;
`;
const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4em;
  height: 30px;
  padding: 0 calc(${({ theme }) => theme.spaces}px * 2);
  width: 100%;
`;

export default Input;
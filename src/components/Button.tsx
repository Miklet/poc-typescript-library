import styled from "styled-components";
import React from "react";

const ButtonRoot = styled.button`
  background-color: red;
`;

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => (
  <ButtonRoot>{children}</ButtonRoot>
);

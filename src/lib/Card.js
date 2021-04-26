import React from "react";
import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 6px;
  background: #fff;
`;

const Title = styled.h1`
  margin: 0;
  margin: 24px;
`;

const secondTitle = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

export const Card = ({ title, secondText }) => (
  <Container>
    {title && <Title> {title} </Title>}
    {secondTitle && <secondTitle> {secondText} </secondTitle>}
  </Container>
);

import React from 'react';
import styled from 'styled-components/macro';
import { screenSize } from 'constants/screenSizes';
import { colours } from 'constants/colours';

const Container = styled.header`
  grid-area: header;
  background-color: #3a529c;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  margin-left: 2.5em;
  color: ${colours.white};

  @media (min-width: ${screenSize.medium}) {
    margin-left: 0.2em;
  }
`;

const Header = () => {
  return (
    <Container>
      <Title>React Boilerplate</Title>
    </Container>
  );
};

export default Header;

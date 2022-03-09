import React from 'react';
import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import FrontEndPage from 'pages/frontend/FrontEndPage';

const Container = styled.main`
  grid-area: content;
  display: flex;
  flex: 1;
  margin: 10px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Routes = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/">
          <FrontEndPage/>
        </Route>        
      </Switch>
    </Container>
  );
};

export default Routes;

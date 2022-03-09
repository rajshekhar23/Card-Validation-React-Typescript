import React from 'react';
import styled from 'styled-components/macro';
import Routes from 'components/Routes';


const Layout = styled.div`
  height: 100%;
  width: 800px;
  margin: 0 auto;
`;

function App(): JSX.Element {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;

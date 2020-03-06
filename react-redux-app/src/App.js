import React from 'react';
import SearchForm from './components/SearchForm';
import BreweryList from './components/BreweryList';
import styled from 'styled-components'

const Container = styled.div`
  height: 1500px;
  background-color: #4ABDAC;
  background-size: cover;
  margin: 0
`


function App() {
  return (
    <Container>
      <SearchForm />
      <BreweryList />
    </Container>
  );
}

export default App;

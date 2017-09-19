import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Container textAlign="center">
        <h1 id="header">Sticky Note App</h1>
        <NoteForm />
        <NoteList />
        <Footer />
      </Container>
    );
  }
}

export default App;

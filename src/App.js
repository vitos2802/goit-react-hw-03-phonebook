import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import Container from './components/Container';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) {
      this.setState({
        contacts: contactsParsed,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleContactFormSubmit = newContact => {
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  handleOnCheckName = newContact => {
    const { contacts } = this.state;
    const isfilterName = !!contacts.find(
      contact => contact.name === newContact.name,
    );

    isfilterName && alert(`${newContact.name} is already in contacts`);

    return !isfilterName;
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.handleContactFormSubmit}
          onCheck={this.handleOnCheckName}
          onDeleteContact={this.handleDeleteContact}
        />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filterContacts}
          onDelete={this.handleDeleteContact}
        />
      </Container>
    );
  }
}

export default App;

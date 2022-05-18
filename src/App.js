import React, { Component } from 'react';
import ContactsList from './components/ContactsList'

class App extends Component {
  state = {
    contactList: [
      {
        id: 1,
        firstName: 'Alex',
        lastName: 'Smith',
        age: 26,
        phone: '0987654321'
      },
      {
        id: 2,
        firstName: 'Vasya',
        lastName: 'Smith2',
        age: 32,
        phone: '0987775566'
      },
      {
        id: 3,
        firstName: 'Egor',
        lastName: 'Smith3',
        age: 34,
        phone: '0987242424'
      },
      {
        id: 4,
        firstName: 'Danil',
        lastName: 'Smith4',
        age: 29,
        phone: '0987635353'
      }
    ]
  }

  render() {
    return (
      <div className="container">
            <ContactsList contactListItem={this.state.contactList} />
      </div>
    )
  }
}

export default App;
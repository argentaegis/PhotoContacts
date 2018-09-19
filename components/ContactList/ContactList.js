import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ContactInfo from '../ContactInfo/ContactInfo';

export default class ContactList extends React.Component {

  constructor() {
    super();
    this.state = {
      contacts: []
    }
  }

  componentWillMount() {
    this.getContacts();
  }

  getContacts() {
    const myContacts =[
      {
        name: 'Contact One',
        email: 'contact@one.com'
      },
      {
        name: 'Contact Two',
        email: 'contact@Two.com'
      },
      {
        name: 'Contact Three',
        email: 'contact@Three.com'
      },
    ];

    this.setState({
      contacts: myContacts
    });
  }

  _keyExtractor = (item, index) => (item.email).toString();

  renderItem(contact) {
    console.log(contact.item);
    return(
      <View>
        <ContactInfo name={contact.item.name} email={contact.item.email}/>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.contacts}
          renderItem={this.renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

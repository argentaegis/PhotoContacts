import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactList from "../ContactList/ContactList";

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home Working</Text>
        <ContactList></ContactList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

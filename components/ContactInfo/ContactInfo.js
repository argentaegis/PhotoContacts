import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ContactInfo extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

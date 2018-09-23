import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PhotoButon from "../PhotoButton/PhotoButton";

export default class ContactInfo extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.email}</Text>
        <PhotoButon onRef={(elem) => this.photoButton = elem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

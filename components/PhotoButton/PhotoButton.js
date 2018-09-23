import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class PhotoButon extends React.Component {

  constructor(props) {
    super(props);

  }

  onPress(){
    console.log('photo button pressed');
    this.props.navigation.navigate('CameraPane');
  }

  render() {
    return (
      <View>
        <Button
          onPress={this.onPress.bind(this)}
          title="Photo"
          color="blue"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

export default withNavigation(PhotoButon);
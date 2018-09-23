import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Camera, Permissions, MailComposer} from 'expo';

export default class CameraPane extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onPress(){
    console.log('Snap pressed');
    this.snap().then((camReturn) => {
      console.log(camReturn);
      this.sendPhoto(camReturn.uri);
    });
  }

  async snap() {
    let photo = {};
    if(this.camera) {
      photo = await this.camera.takePictureAsync();
    } else (
      console.log('no camera')
    )

    return photo;
  }

  async sendPhoto(photoUri) {
    console.log('sendPhoto');
    const message = {
      recipients: ['argentaegis@gmail.com'],
      subject: 'test message',
      body: 'testing',
      attachments: [photoUri]
    }
    const messageStatus = await MailComposer.composeAsync(message);
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={this.onPress.bind(this)}
              >
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Snap{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
});

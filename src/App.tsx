import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

function App(): React.JSX.Element {
  const device = useCameraDevice('back');
  const {hasPermission} = useCameraPermission();

  if (!device || !hasPermission) return <></>;

  return (
    <View style={styles.root}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

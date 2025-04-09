import {StyleSheet, View} from 'react-native';
import {CameraWrapper} from './components/CameraWrapper.tsx';

function App() {
  return (
    <View style={styles.root}>
      <CameraWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

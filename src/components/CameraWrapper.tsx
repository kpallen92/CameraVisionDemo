import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useSkiaFrameProcessor,
} from 'react-native-vision-camera';
import {StyleSheet, Text} from 'react-native';

export const CameraWrapper = () => {
  const device = useCameraDevice('back');
  const {hasPermission, requestPermission} = useCameraPermission();

  const frameProcessor = useSkiaFrameProcessor(frame => {
    'worklet';
    frame.render();
  }, []);

  if (!hasPermission) {
    requestPermission();
    return <Text>No permission</Text>;
  }
  if (!device) return <Text>No device</Text>;

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      frameProcessor={frameProcessor}
    />
  );
};

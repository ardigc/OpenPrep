import { View, ActivityIndicator, StyleSheet, ColorValue } from 'react-native';

const Spinner = ({
  size = 'large',
  color = '#000',
}: {
  size?: number | 'large' | 'small';
  color?: ColorValue;
}) => {
  return (
    <View style={styles.spinnerContainer}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Spinner;

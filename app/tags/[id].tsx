import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function tag() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>this is the page for {id} tag</Text>
    </View>
  );
}

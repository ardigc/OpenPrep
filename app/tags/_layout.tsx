import { Slot, Stack, useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';

export default function HomeLayout() {
  const { id } = useLocalSearchParams();

  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ headerTitle: `NFC tag ${id}` }} />
    </Stack>
  );
}

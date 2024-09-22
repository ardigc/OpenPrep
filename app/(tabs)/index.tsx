import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  const nfcTags = [1, 2, 3];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Holi bb</Text>
      {nfcTags.map((tagID) => (
        <Link key={tagID} href={`/tags/${tagID}`}>
          NFC TAG {tagID}
        </Link>
      ))}
    </View>
  );
}

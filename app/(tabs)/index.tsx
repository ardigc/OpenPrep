import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export default function Index() {
  const { t } = useTranslation();
  const nfcTags = ['1234', '5678', '9101', '1121'];
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{t('common:welcome')} bb</Text>
      {nfcTags.map((tagID) => (
        <Link key={tagID} href={`/tags/${tagID}`}>
          NFC TAG {tagID}
        </Link>
      ))}
    </View>
  );
}

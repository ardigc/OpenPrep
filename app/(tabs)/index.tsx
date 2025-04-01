import { Colors } from '@/constants/Colors';
import { delay } from '@/helpers/helpers';
import JWT from 'expo-jwt';
import {
  Link,
  router,
  useFocusEffect,
  useLocalSearchParams,
} from 'expo-router';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';

const SECRET_KEY_TEST =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczMDgzODExNywiaWF0IjoxNzMwODM4MTE3fQ.9bmb__h0eO0QkIryRQJB-0TduOk9oSLaFt-5tflS16Q';

export default function Index() {
  const { t } = useTranslation();
  const [hasNfc, setHasNfc] = useState<boolean | null>(null);
  const nfcTags = ['ks4utsn', '5678', '9101', '1121'];

  useFocusEffect(
    React.useCallback(() => {
      const readNdef = async () => {
        console.log('hola');
        let attempts = 0;
        const maxAttempts = 5;

        while (attempts < maxAttempts) {
          try {
            const isSupported = await NfcManager.isSupported();
            if (!isSupported) {
              console.warn('NFC no está soportado en este dispositivo.');
              return;
            }
            await NfcManager.start();

            setHasNfc(isSupported);
            await NfcManager.requestTechnology(NfcTech.Ndef);
            const tag = await NfcManager.getTag();

            if (tag?.ndefMessage && tag?.ndefMessage.length > 0) {
              const ndefRecord = tag.ndefMessage[0];
              const decodedPayload = ndefRecord.payload
                .map((element) => String.fromCharCode(element))
                .join('');

              const customData = JSON.parse(decodedPayload.substring(3));
              const decoded = JWT.decode(customData, SECRET_KEY_TEST);
              console.log('test', decoded);
              if (!nfcTags.includes(decoded.id)) {
                console.warn('no existe');
              }
              router.navigate(`/tags/${decoded.id}`);
              break;
            }
          } catch (ex) {
            attempts++;
            if (attempts < maxAttempts) {
              console.log(ex);
              await delay(500);
            } else {
              console.error('No se puede conectar por NFC', ex);
            }
          } finally {
            NfcManager.cancelTechnologyRequest();
          }
        }
      };

      readNdef();

      return () => {
        console.log('adios');
        NfcManager.cancelTechnologyRequest();
      };
    }, [])
  );

  if (hasNfc === null) {
    return <Text>Comprobando soporte NFC...</Text>;
  } else if (!hasNfc) {
    return <Text>Tu dispositivo no soporta NFC</Text>;
  }

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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textStyleButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

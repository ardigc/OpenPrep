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

// export default function Index() {
//   const [message, setMessage] = useState('');
//   const readNdef = async () => {
//     try {
//       console.log('scaning');
//       // register for the NFC tag with NDEF in it
//       await NfcManager.requestTechnology(NfcTech.Ndef);
//       const tag = await NfcManager.getTag();

//       if (tag?.ndefMessage && tag?.ndefMessage.length > 0) {
//         const ndefRecord = tag.ndefMessage[0];

//         const decodedPayload = ndefRecord.payload
//           .map((element) => String.fromCharCode(element))
//           .join('');

//         const customData = JSON.parse(decodedPayload.substring(3));
//         const decoded = JWT.decode(customData, SECRET_KEY_TEST);
//         console.log('ID Interno:', decoded);
//         setMessage(decoded.id);
//       }
//     } catch (ex) {
//       console.warn('Oops!', ex);
//     } finally {
//       // stop the nfc scanning
//       NfcManager.cancelTechnologyRequest();
//     }
//   };
//   const writeCustomData = async () => {
//     try {
//       await NfcManager.start();

//       await NfcManager.requestTechnology(NfcTech.Ndef);
//       const id = Math.random();
//       const parsedId = id.toString(36).substring(2, 9);
//       const token = JWT.encode({ id: parsedId }, SECRET_KEY_TEST);

//       const jsonString = JSON.stringify(token);

//       const bytes = Ndef.encodeMessage([Ndef.textRecord(jsonString)]);

//       if (bytes) {
//         await NfcManager.ndefHandler.writeNdefMessage(bytes);
//         console.log('Datos escritos con éxito en la etiqueta NFC');
//       }
//     } catch (ex) {
//       console.warn('Error al escribir en la etiqueta NFC', ex);
//     } finally {
//       // Asegúrate de cancelar la tecnología NFC cuando hayas terminado
//       NfcManager.cancelTechnologyRequest();
//     }
//   };
//   return (
//     <View style={styles.wrapper}>
//       <TouchableOpacity onPress={readNdef}>
//         <Text>Scan a Tag</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => writeCustomData('ID12345')}>
//         <Text>Write a Tag</Text>
//       </TouchableOpacity>
//       {!!message && <Text>internalId: {message}</Text>}
//     </View>
//   );
// }

// Pre-step, call this before any NFC operations
// NfcManager.start();
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

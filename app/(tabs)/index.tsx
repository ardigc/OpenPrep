import JWT from 'expo-jwt';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager, { NfcTech, Ndef } from 'react-native-nfc-manager';
import uuid from 'react-native-uuid';

// Pre-step, call this before any NFC operations
NfcManager.start();
const SECRET_KEY_TEST =
  'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczMDgzODExNywiaWF0IjoxNzMwODM4MTE3fQ.9bmb__h0eO0QkIryRQJB-0TduOk9oSLaFt-5tflS16Q';

export default function Index() {
  const [message, setMessage] = useState('');
  const readNdef = async () => {
    try {
      console.log('scaning');
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();

      if (tag?.ndefMessage && tag?.ndefMessage.length > 0) {
        const ndefRecord = tag.ndefMessage[0];

        const decodedPayload = ndefRecord.payload
          .map((element) => String.fromCharCode(element))
          .join('');

        const customData = JSON.parse(decodedPayload.substring(3));
        const decoded = JWT.decode(customData, SECRET_KEY_TEST);
        console.log('ID Interno:', decoded);
        setMessage(decoded.id);
      }
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  };
  const writeCustomData = async () => {
    try {
      await NfcManager.start();

      await NfcManager.requestTechnology(NfcTech.Ndef);
      const id = uuid.v4();
      const token = JWT.encode({ id }, SECRET_KEY_TEST);

      const jsonString = JSON.stringify(token);

      const bytes = Ndef.encodeMessage([Ndef.textRecord(jsonString)]);

      if (bytes) {
        await NfcManager.ndefHandler.writeNdefMessage(bytes);
        console.log('Datos escritos con éxito en la etiqueta NFC');
      }
    } catch (ex) {
      console.warn('Error al escribir en la etiqueta NFC', ex);
    } finally {
      // Asegúrate de cancelar la tecnología NFC cuando hayas terminado
      NfcManager.cancelTechnologyRequest();
    }
  };
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => writeCustomData('ID12345')}>
        <Text>Write a Tag</Text>
      </TouchableOpacity>
      {!!message && <Text>internalId:{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import { Link } from 'expo-router';
// import { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { Alert, Text, View } from 'react-native';
// import NfcManager, { NfcEvents } from 'react-native-nfc-manager';
// NfcManager.start();

// export default function Index() {
//   const { t } = useTranslation();
//   const [hasNfc, setHasNfc] = useState<boolean | null>(null);

//   useEffect(() => {
//     const setupNfc = async () => {
//       const supported = await NfcManager.isSupported();
//       if (supported) {
//         await NfcManager.start();
//         setHasNfc(true);
//         startNfcListening();
//       } else {
//         setHasNfc(false);
//       }
//     };

//     setupNfc();

//     return () => {
//       stopNfcListening();
//     };
//   }, []);

//   const startNfcListening = () => {
//     NfcManager.setEventListener(NfcEvents.DiscoverTag, handleNfcTag);
//     NfcManager.registerTagEvent();
//   };

//   const stopNfcListening = () => {
//     NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
//     NfcManager.unregisterTagEvent().catch(() => {});
//   };

//   const handleNfcTag = (tag) => {
//     console.log('Etiqueta NFC detectada:', tag);
//     // Aquí puedes procesar la etiqueta NFC
//     // Por ejemplo, leer su contenido NDEF si está disponible
//     if (tag.ndefMessage && tag.ndefMessage.length > 0) {
//       const ndefMessage = tag.ndefMessage[0];
//       const payload = ndefMessage.payload;
//       const textDecoder = new TextDecoder('utf-8');
//       const decodedPayload = textDecoder.decode(payload);
//       Alert.alert('Etiqueta NFC leída', decodedPayload);
//     }
//   };

//   if (hasNfc === null) {
//     return <Text>Comprobando soporte NFC...</Text>;
//   } else if (!hasNfc) {
//     return <Text>Tu dispositivo no soporta NFC</Text>;
//   }

//   const nfcTags = ['1234', '5678', '9101', '1121'];
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Text>{t('common:welcome')} bb</Text>
//       {nfcTags.map((tagID) => (
//         <Link key={tagID} href={`/tags/${tagID}`}>
//           NFC TAG {tagID}
//         </Link>
//       ))}
//     </View>
//   );
// }

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();

export default function Index() {
  async function readNdef() {
    try {
      console.log('scaning')
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
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

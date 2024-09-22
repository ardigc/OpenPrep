import { Collapsible } from '@/components/Collapsible';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';

export default function Settings() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', label: t('language:english') },
    { code: 'es', label: t('language:spanish') },
  ];
  const selectedLanguageCode = i18n.language;
  console.log(languages, i18n);
  console.log(selectedLanguageCode);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <Collapsible title="Change languaje">
        {languages.map((currentLang) => {
          const selectedLanguage = currentLang.code === selectedLanguageCode;
          return (
            <Text
              key={`lang ${currentLang.code}`}
              onPress={() => {
                i18n.changeLanguage(currentLang.code); // it will change the language through out the app.
              }}
              style={{
                color: selectedLanguage ? Colors.light.text : '#000000',
                padding: 10,
                fontSize: 18,
                fontWeight: selectedLanguage ? 'bold' : 'normal',
              }}
            >
              {currentLang.label}
            </Text>
          );
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});

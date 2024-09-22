import { getLocales } from 'expo-localization';
import { Stack } from "expo-router";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { langResources } from './localization/i18n';

export default function RootLayout() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const deviceLocale = getLocales()[0].languageCode ?? 'en';
    const availabeLang = Object.keys(langResources).includes(deviceLocale)
      ? deviceLocale
      : 'en';
    i18n.changeLanguage(availabeLang);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="tags" options={{ headerShown: false }} />
    </Stack>
  );
}

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';

export const MacroElement = ({
  type,
  children,
}: {
  type: string;
  children: ReactNode;
}) => {
  const { t } = useTranslation();

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{fontWeight:600}}>{children}</Text>
      <Text>{t(`tagPage:${type}`)}</Text>
    </View>
  );
};

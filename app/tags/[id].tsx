import { PieChart } from '@/components/PieChart';
import { getTupperInfo } from '@/services/openPrepSvc';
import { Tupper } from '@/types/types';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Tag() {
  const { id }: { id: string } = useLocalSearchParams();
  const { t } = useTranslation();
  const [tupperInfo, setTupperInfo] = useState<Tupper | null>(null);
  useEffect(() => {
    const getData = async () => {
      const res = await getTupperInfo(id);
      setTupperInfo(res);
    };
    getData();
  }, []);

  if (!tupperInfo)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <View>
              <Text>{tupperInfo.recipe}</Text>
              {/* <Text>NFC tag {id}</Text> */}
            </View>
          ),
        }}
      />

      <PieChart info={tupperInfo} tagID={id} />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  macrosContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

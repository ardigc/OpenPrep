import { ChangeTupperName } from '@/components/tag/ChangeTupperName';
import { PieChart } from '@/components/tag/PieChart';
import { Colors } from '@/constants/Colors';
import { getTupperInfo } from '@/services/openPrepSvc';
import { Tupper } from '@/types/types';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function Tag() {
  const { id }: { id: string } = useLocalSearchParams();
  const [tupperInfo, setTupperInfo] = useState<Tupper | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const headerTitle = () => (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text>{tupperInfo.name}</Text>
    </View>
  );

  const headerRight = () => (
    <Pressable onPress={() => setModalVisible(true)}>
      {({ pressed }) => (
        <Ionicons
          name="pencil"
          size={30}
          color={pressed ? Colors.light.icon : Colors.dark.icon}
        />
      )}
    </Pressable>
  );

  return (
    <ScrollView>
      <Stack.Screen options={{ headerTitle, headerRight }} />
      <PieChart info={tupperInfo} tagID={id} />
      <ChangeTupperName
        modalVisible={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        tupperName={tupperInfo.name}
        tupperID={id}
      />
    </ScrollView>
  );
}

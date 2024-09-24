import { ChangeTupperName } from '@/components/tag/ChangeTupperName';
import { CleanTupperButton } from '@/components/tag/CleanTupperButton';
import { PieChart } from '@/components/tag/PieChart';
import { Colors } from '@/constants/Colors';
import { getTupperInfo } from '@/services/openPrepSvc';
import { Tupper } from '@/types/types';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function Tag() {
  const { id }: { id: string } = useLocalSearchParams();
  const [tupper, setTupper] = useState<Tupper | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { t } = useTranslation();

  useEffect(() => {
    getTupperData();
  }, []);

  const getTupperData = async () => {
    const res = await getTupperInfo(id);
    if (res.data) setTupper(res.data);
    if (res.error) {
      Alert.alert('Error', t('tagPage:tupperFail'), [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }
  };

  const handleCloseEditTupperName = (updated: boolean) => {
    getTupperData();
    setModalVisible(false);
  };

  const headerTitle = () =>
    tupper ? (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>{tupper.name}</Text>
      </View>
    ) : (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <Text>
          {t('tagPage:ID')}
          {id}
        </Text>
      </View>
    );

  const headerRight = () =>
    tupper && (
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
      {tupper?.info ? (
        <>
          <PieChart info={tupper.info} tagID={id} />
          <View style={styles.buttonsContainer}>
            <CleanTupperButton
              tupperID={id}
              onCleanTupper={() => getTupperData()}
            />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Colors.light.buttonBackgroundPressed
                    : Colors.light.buttonBackground,
                },
                styles.button,
              ]}
            >
              <Text style={styles.textStyleButton}>Change Tupper Meal</Text>
            </Pressable>
          </View>
          <ChangeTupperName
            modalVisible={modalVisible}
            onCloseModal={handleCloseEditTupperName}
            tupperName={tupper.name}
            tupperID={id}
          />
        </>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  buttonsContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    padding: 16,
    borderRadius: 20,
    color: 'white',
  },
  textStyleButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

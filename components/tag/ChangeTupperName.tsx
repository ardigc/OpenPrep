import { Colors } from '@/constants/Colors';
import { editTupperName } from '@/services/openPrepSvc';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Spinner from '../common/Spinner';

export const ChangeTupperName = ({
  onCloseModal,
  modalVisible,
  tupperName,
  tupperID,
}: {
  onCloseModal: () => void;
  modalVisible: boolean;
  tupperName: string;
  tupperID: string;
}) => {
  const [name, setName] = useState(tupperName);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleEditTupperName = async () => {
    setLoading(true);
    const response = await editTupperName(name, tupperID);
    setLoading(false);
    if (response.data) {
      onCloseModal();
      return;
    }
    Alert.alert('Fail updating name');
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Changes not saved');
        onCloseModal();
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>{t(`tagPage:newName`)}</Text>
          <View style={styles.newNameContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
            />
            {loading ? (
              <Spinner />
            ) : (
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={handleEditTupperName}
              >
                <Text style={styles.textStyleButton}>Save</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    padding: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
    margin: 15,
    gap: 10,
  },
  newNameContainer: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyleButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: 'rgb(215, 215, 215)',
    backgroundColor: 'rgb(230, 230, 230)',
    flex: 1,
  },
});

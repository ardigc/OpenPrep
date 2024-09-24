import { Colors } from '@/constants/Colors';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export const CustomAlert = ({
  isVisible,
  onCancel,
  onConfirm,
  title,
}: {
  isVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  title: string;
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onCancel()}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{ fontWeight: 'bold' }}>{title}</Text>
          <View style={styles.contentContainer}>
            <Text>This action will delete the meal info</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'rgba(0, 0, 0, 0.1)' : undefined,
                },
                styles.button,
              ]}
              onPress={() => onCancel()}
            >
              <Text style={styles.textStyleButtonCancel}>Cancel</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? Colors.light.buttonBackgroundPressed
                    : Colors.light.buttonBackground,
                },
                styles.button,
              ]}
              onPress={() => onConfirm()}
            >
              <Text style={styles.textStyleButton}>Confirm</Text>
            </Pressable>
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
    margin: 15,
    gap: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
    gap: 5,
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
  textStyleButtonCancel: {
    color: 'red',
    textAlign: 'center',
  },
  contentContainer: {
    padding: 5,
  },
});

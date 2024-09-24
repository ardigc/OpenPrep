import { Colors } from '@/constants/Colors';
import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { CustomAlert } from '../CustomAlert';
import CleaningScrubberIcon from '@/assets/icons/CleaningScrubberIcon';
import { cleanTupper } from '@/services/openPrepSvc';

export const CleanTupperButton = ({
  tupperID,
  onCleanTupper,
}: {
  tupperID: string;
  onCleanTupper: () => void;
}) => {
  const [openModal, setOpenModal] = useState(false);
  const handleClean = async () => {
    const res = await cleanTupper(tupperID);
    if (res.data) onCleanTupper();
  };
  return (
    <Pressable
      onPress={() => {
        setOpenModal(true);
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? Colors.light.buttonBackgroundPressed
            : Colors.light.buttonBackground,
        },
        styles.button,
      ]}
    >
      <Text style={styles.textStyleButton}>Clean Tupper</Text>
      <CleaningScrubberIcon color="white" />

      <CustomAlert
        isVisible={openModal}
        onCancel={() => setOpenModal(false)}
        onConfirm={handleClean}
        title={'Do you want to clean this tupper?'}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderRadius: 20,
    color: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textStyleButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

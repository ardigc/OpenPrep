import { NutritionalInfo } from '@/types/types';
import { TFunction } from 'i18next';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text, View } from 'react-native';
import { PieChart as Chart } from 'react-native-gifted-charts';

export const PieChart = ({
  info: { carbs, fats, proteins, kcal, recipe, freezing_date },
  tagID,
}: {
  info: NutritionalInfo;
  tagID: string;
}) => {
  const { t } = useTranslation();

  const pieData = [
    { value: fats ?? 0, color: '#FFA5BA', gradientCenterColor: '#FF7F97' },
    { value: carbs ?? 0, color: '#009FFF', gradientCenterColor: '#006DFF' },
    { value: proteins ?? 0, color: '#BDB2FA', gradientCenterColor: '#8F80F3' },
  ];

  return (
    <View
      style={{
        paddingTop: 10,
        flex: 1,
      }}
    >
      <View
        style={{
          margin: 20,
          padding: 16,
          borderRadius: 20,
          backgroundColor: '#232B5D',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {recipe}
        </Text>
        <View style={{ padding: 20, alignItems: 'center' }}>
          <Chart
            data={pieData}
            donut
            showGradient
            sectionAutoFocus
            radius={90}
            innerRadius={60}
            innerCircleColor={'#232B5D'}
            centerLabelComponent={() => {
              return (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text
                    style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}
                  >
                    {kcal}
                  </Text>
                  <Text style={{ fontSize: 14, color: 'white' }}>kcal</Text>
                </View>
              );
            }}
          />
        </View>
        {renderLegendComponent(t, carbs, fats, proteins)}
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.textColor}>
            {t('tagPage:freezing_date')}: {freezing_date}
          </Text>
          <Text style={styles.textColor}>
            {t('tagPage:ID')}: {tagID}
          </Text>
        </View>
      </View>
    </View>
  );
};
const renderLegendComponent = (
  t: TFunction<'translation', undefined>,
  carbs?: number,
  fats?: number,
  proteins?: number
) => {
  const renderDot = (color: string) => {
    return (
      <View
        style={{
          height: 10,
          width: 10,
          borderRadius: 5,
          backgroundColor: color,
          marginRight: 10,
        }}
      />
    );
  };
  return (
    <View style={styles.legendMacroContainer}>
      <View style={styles.legendMacroColumn}>
        <View style={styles.legendMacroItem}>
          {renderDot('#FFA5BA')}
          <Text style={styles.textColor}>
            {t(`tagPage:fats`)}: {fats}g
          </Text>
        </View>
        <View style={styles.legendMacroItem}>
          {renderDot('#009FFF')}
          <Text style={styles.textColor}>
            {t(`tagPage:carbs`)}: {carbs}g
          </Text>
        </View>
      </View>
      <View style={styles.legendMacroColumn}>
        <View style={styles.legendMacroItem}>
          {renderDot('#BDB2FA')}
          <Text style={styles.textColor}>
            {t(`tagPage:proteins`)}: {proteins}g
          </Text>
        </View>
        <View style={styles.legendMacroItem}></View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  textColor: { color: 'white' },
  legendMacroContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginRight: 20,
    gap: 10,
  },
  legendMacroColumn: {
    gap: 5,
  },
  legendMacroItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

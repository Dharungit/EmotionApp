import React from 'react';
import {View} from 'react-native';
import {MoodPicker} from '../../components/MoodPicker';
import {MoodOptionType, MoodOptionWithTimestamp} from '../../types';
import {styles} from './styles';

export const Home: React.FC = () => {
  const [moodList, setMoodList] = React.useState<MoodOptionWithTimestamp[]>([]);

  const handleSelectMood = React.useCallback((mood: MoodOptionType) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
    </View>
  );
};

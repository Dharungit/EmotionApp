import React from 'react';
import {View} from 'react-native';
import {MoodPicker} from '../../components/MoodPicker';
import {useAppDispatch} from '../../hooks/storeHook';
import {addEmotion} from '../../store/slice/emotionSlice';
import {IMoodOption, IMoodOptionWithTimestamp} from '../../types';
import {styles} from './styles';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [moodList, setMoodList] = React.useState<IMoodOptionWithTimestamp[]>(
    [],
  );
  const handleSelectMood = React.useCallback((mood: IMoodOption) => {
    setMoodList(current => [...current, {mood, timestamp: Date.now()}]);
    dispatch(addEmotion({mood, timestamp: Date.now()}));
  }, []);

  return (
    <View style={styles.container}>
      <MoodPicker onSelect={handleSelectMood} />
    </View>
  );
};

import React from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import {moodOptions} from '../../helper/MoodOption';
import {MoodOptionType} from '../../types';
import {styles} from './styles';

type MoodPickerProps = {
  onSelect: (mood: MoodOptionType) => void;
};

export const MoodPicker: React.FC<MoodPickerProps> = ({onSelect}) => {
  const [selectedMoodItem, setSelected] = React.useState<MoodOptionType>();

  const handleSelect = React.useCallback(() => {
    if (selectedMoodItem) {
      onSelect(selectedMoodItem);
      setSelected(undefined);
    }
  }, [onSelect, selectedMoodItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map((option, index) => {
          return (
            <View key={index}>
              <Pressable
                onPress={() => setSelected(option)}
                style={[
                  styles.moodItem,
                  selectedMoodItem?.emoji === option.emoji &&
                    styles.selectedMood,
                ]}>
                <Text style={styles.moodText}>{option.emoji}</Text>
              </Pressable>
              <Text style={styles.descriptionText}>
                {selectedMoodItem?.emoji === option.emoji && option.description}
              </Text>
            </View>
          );
        })}
      </View>
      <Pressable onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

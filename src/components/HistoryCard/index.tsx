import React from 'react';
import {View, Text} from 'react-native';
import {IMoodOptionWithTimestamp} from '../../types';
import format from 'date-fns/format';
import {styles} from './styles';

interface IHistoryCardProps {
  data: IMoodOptionWithTimestamp;
}

export const HistoryCard: React.FC<IHistoryCardProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconAndDescription}>
        <Text style={styles.moodValue}>{data.mood.emoji}</Text>
        <Text style={styles.moodDescription}>{data.mood.description}</Text>
      </View>
      <View>
        <Text style={styles.moodDate}>
          {format(new Date(data.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        </Text>
      </View>
    </View>
  );
};

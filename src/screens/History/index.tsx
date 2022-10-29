import React from 'react';
import {View, FlatList} from 'react-native';
import {HistoryCard} from '../../components/HistoryCard';
import {useAppSelector} from '../../hooks/storeHook';
import {IMoodOptionWithTimestamp} from '../../types';

export const History: React.FC = () => {
  const emotions = useAppSelector(state => state.emotion);
  return (
    <View>
      <FlatList
        data={emotions}
        keyExtractor={(item: IMoodOptionWithTimestamp) =>
          item.timestamp.toString()
        }
        renderItem={({item}) => {
          return <HistoryCard data={item} />;
        }}
      />
    </View>
  );
};

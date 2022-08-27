import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.purple,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  heading: {
    color: theme.colors.purple,
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  descriptionText: {
    color: theme.colors.purple,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  moodItem: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  moodText: {
    fontSize: 25,
    textAlign: 'center',
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectedMood: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
    borderRadius: 50,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.white,
    backgroundColor: theme.colors.purple,
    padding: 10,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10,
  },
});

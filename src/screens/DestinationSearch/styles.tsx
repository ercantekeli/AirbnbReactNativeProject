import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {padding: 20, height: '100%', backgroundColor: 'white'},
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    gap: 15,
  },
  icon: {
    color: 'black',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 7,
    borderRadius: 10,
    color: 'black',
  },
  locationText: {
    color: 'black',
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colors';
import { RfH } from '../../utils/helpers';

const styles = StyleSheet.create({
  modalBackground: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    flex: 1,
    zIndex: 99999,
    elevation: 1,
    width: '100%',
    top: 0,
    bottom: 0,
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.white,
    height: RfH(120),
    width: RfH(120),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 5,
    color: Colors.black,
    textAlign: 'center',
    letterSpacing: -0.5,
  },
});

export default styles;

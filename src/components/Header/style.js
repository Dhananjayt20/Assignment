import { StyleSheet } from 'react-native';
import { RfH } from '../../utils/helpers';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_SCREEN_SIZE } from '../../utils/helpers';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    //paddingTop: RfH(15),
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: RFValue(17, STANDARD_SCREEN_SIZE),
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;

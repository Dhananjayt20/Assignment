import { StyleSheet } from 'react-native';
import Colors from '../../../theme/Colors';
import { RfH, RfW } from '../../../utils/helpers';
import { RFValue } from 'react-native-responsive-fontsize';
import { STANDARD_SCREEN_SIZE } from '../../../utils/helpers';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    cardStyle: {
        backgroundColor: Colors.white,
        paddingVertical: RfH(10),
    },
    separator: {
        height: RfH(0.6),
        opacity: 0.5,
        backgroundColor: 'rgba(17, 17, 17, 0.5)',
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: Colors.black,
        fontWeight: 'bold',
        fontSize: RFValue(16, STANDARD_SCREEN_SIZE),
    },
    email: {
        color: Colors.black,
        fontSize: RFValue(13, STANDARD_SCREEN_SIZE),
    },
    location: {
        color: Colors.black,
        fontSize: RFValue(13, STANDARD_SCREEN_SIZE),
        fontWeight: 'bold',
    },
    inRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    arrow: {
        width: RfH(12),
        height: RfH(12),
        resizeMode: 'contain',
        marginLeft: RfW(5),
        opacity: 0.5,
    },
    regDate: {
        color: Colors.coolGrey,
        fontSize: RFValue(13, STANDARD_SCREEN_SIZE),
    },
});

export default styles;

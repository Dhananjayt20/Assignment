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
    innerContainer: {
        padding: RfH(20),
    },
    heading: {
        color: Colors.black,
        fontSize: RFValue(16, STANDARD_SCREEN_SIZE),
        fontWeight: 'bold',
    },
    title: {
        color: Colors.black,
        fontSize: RFValue(14, STANDARD_SCREEN_SIZE),
        fontWeight: 'bold',
        paddingVertical: RfH(3),
    },
    description: {
        color: Colors.blueGrey,
        fontSize: RFValue(14, STANDARD_SCREEN_SIZE),
        marginTop: RfH(8),
    },
    separator: {
        height: RfH(1.5),
        opacity: 0.5,
        backgroundColor: 'rgba(17, 17, 17, 0.5)',
    },
    diamond: {
        width: 40,
        height: 40,
        backgroundColor: Colors.backgroundYellow,
        transform: [{ rotate: '45deg' }],
        borderColor: 'yellow',
        borderWidth: RfH(1.5),
        position: 'absolute',
        bottom: RfH(-10),
        right: RfW(50),
        justifyContent: 'center',
        alignItems: 'center',
    },
    ageContainer: {
        transform: [{ rotate: '-50deg' }],
    },
});

export default styles;

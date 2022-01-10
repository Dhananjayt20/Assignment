import { isEmpty } from 'lodash';
import { Alert, Dimensions } from 'react-native';
import { isNumber } from 'lodash';
export const STANDARD_SCREEN_SIZE = 812;
import Moment from 'moment';

const STANDARD_SCREEN_DIMENSIONS = { height: 812, width: 375 };

export const alertBox = (
    alertTitle = '',
    alertMsg = '',
    config = {
        positiveText: 'OK',
        cancelable: true,
    },
) => {
    let configuration = [
        {
            text: config.positiveText, // Key to show string like "Ok" etc. i.e. positive response text
            onPress: config.onPositiveClick, // Key that contains function that executes on click of above text button
        },
    ];
    if (config.middleText && !isEmpty(config.middleText)) {
        configuration = [
            ...configuration,
            {
                text: config.middleText, // Key to show string like "Cancel" etc. i.e. negative response text
                onPress: config.onMiddleClick, // Key that contains function that executes on click of above text button
            },
        ];
    }
    if (config.negativeText && !isEmpty(config.negativeText)) {
        configuration = [
            ...configuration,
            {
                text: config.negativeText, // Key to show string like "Cancel" etc. i.e. negative response text
                onPress: config.onNegativeClick, // Key that contains function that executes on click of above text button
                style: 'destructive',
            },
        ];
    }
    Alert.alert(alertTitle, alertMsg, configuration, {
        cancelable: config.cancelable,
    });
};

export const RfW = value => {
    const dim = Dimensions.get('window');
    return dim.width * (value / STANDARD_SCREEN_DIMENSIONS.width);
};

export const RfH = value => {
    const dim = Dimensions.get('window');
    return dim.height * (value / STANDARD_SCREEN_DIMENSIONS.height);
};

export const getBaseUrl = async () => {
    const base_url = 'https://randomuser.me/';
    return base_url;
};

export const getImageSource = imagePath =>
    isNumber(imagePath) ? imagePath : { uri: imagePath };

export const formatDate = value => Moment(value).format('DD MMM YYYY');

export const monthFormatDate = value => Moment(value).format('MMMM DD, YYYY');

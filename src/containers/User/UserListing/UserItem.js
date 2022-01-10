import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import CustomImage from '../../../components/CustomImage';
import { RfW, RfH, monthFormatDate } from '../../../utils/helpers';
import Images from '../../../theme/Images';

function UserItem(props) {
    const { item, index, handleOpen } = props;
    return (
        <TouchableOpacity
            onPress={() => handleOpen(item)}
            key={index}
            style={[styles.cardStyle]}
            activeOpacity={0.8}>
            <View style={styles.innerContainer}>
                <CustomImage
                    image={item?.picture?.thumbnail}
                    imageWidth={RfH(60)}
                    imageHeight={RfH(60)}
                    imageResizeMode={'contain'}
                />
                <View style={{ marginLeft: RfW(10), flex: 1 }}>
                    <View style={styles.inRow}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.title]}>
                                {item?.name?.first} {item?.name?.last}
                            </Text>
                        </View>

                        <View style={[styles.inRow, { justifyContent: 'flex-end' }]}>
                            <Text style={styles.regDate}>
                                {monthFormatDate(item?.registered?.date)}
                            </Text>
                            <Image source={Images.arrow_right} style={styles.arrow} />
                        </View>
                    </View>

                    <Text style={styles.email}>{item?.email}</Text>
                    <Text style={[styles.location]}>
                        Country |{' '}
                        <Text style={[styles.location, { fontWeight: 'normal' }]}>
                            {item?.location?.country}
                        </Text>
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default UserItem;

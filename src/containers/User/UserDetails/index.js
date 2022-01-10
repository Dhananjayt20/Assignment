import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { useRoute } from '@react-navigation/native';
import { isEmpty } from 'lodash';
import CustomImage from '../../../components/CustomImage';
import { RfH, RfW, formatDate, monthFormatDate } from '../../../utils/helpers';
import Header from '../../../components/Header';
import Images from '../../../theme/Images';
import { useNavigation } from '@react-navigation/native';

function UserDetails() {
    const route = useRoute();
    const [data, setData] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        const { item } = route.params;
        setData(item);
    }, []);

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        !isEmpty(data) && (
            <View style={styles.mainContainer}>
                <Header
                    titleText={data?.name?.first + ' ' + data?.name?.last}
                    rightButtonImage={Images.edit_user}
                    onRightButtonClickHandler={() => { }}
                    isBackButtonVisible={true}
                    onBackPressHandler={handleBackPress}
                    isRightButtonVisible={false}
                />
                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                    <View style={styles.innerContainer}>
                        <View>
                            <CustomImage
                                image={data?.picture?.large}
                                imageWidth={RfH(250)}
                                imageHeight={RfH(250)}
                                imageResizeMode={'contain'}
                                containerStyling={{ alignSelf: 'center' }}
                            />
                            <View style={styles.diamond}>
                                <View style={styles.ageContainer}>
                                    <Text style={[styles.heading]}>{data?.dob?.age}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[styles.separator, { marginTop: RfH(50) }]} />

                        {/*--------------- BASIC --------------  */}
                        <View style={{ marginTop: RfH(10) }}>
                            <Text style={styles.title}>Email: {data?.email}</Text>
                            <Text style={styles.title}>
                                Date Joined: {monthFormatDate(data?.registered?.date)}
                            </Text>
                            <Text style={styles.title}>
                                DOB: {formatDate(data?.dob?.date)}
                            </Text>
                        </View>

                        {/*--------------- LOCATION --------------  */}
                        <View style={{ marginTop: RfH(30) }}>
                            <Text style={styles.heading}>LOCATION</Text>
                            <View
                                style={[
                                    styles.separator,
                                    { marginTop: RfH(5), marginBottom: RfH(5) },
                                ]}
                            />
                            <Text style={[styles.title]}>
                                city: "{data?.location?.city}",
                            </Text>
                            <Text style={[styles.title]}>
                                state: "{data?.location?.state}",
                            </Text>
                            <Text style={[styles.title]}>
                                country: "{data?.location?.country}",
                            </Text>
                            <Text style={[styles.title]}>
                                postcode: "{data?.location?.postcode}",
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    );
}

export default UserDetails;

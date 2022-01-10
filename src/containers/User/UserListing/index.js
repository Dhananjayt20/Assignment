import React, { useEffect } from 'react';
import { View, FlatList, BackHandler } from 'react-native';
import styles from './styles';
import { isEmpty } from 'lodash';
import UserItem from './UserItem';
import NavigationRouteNames from '../../../routes/ScreenName';

import { getUserData } from '../redux/actions';
import { createStructuredSelector } from 'reselect';
import { getNetworkStateSelector } from '../../../appContainer/selectors';
import { getUserDataSelector } from '../redux/selectors';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RfW } from '../../../utils/helpers';
import Images from '../../../theme/Images';
import Header from '../../../components/Header';

const stateSelector = createStructuredSelector({
  networkConnected: getNetworkStateSelector,
  usersData: getUserDataSelector,
});

function UserListing() {
  const { networkConnected, usersData } = useSelector(stateSelector);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (networkConnected) {
      dispatch(getUserData.trigger());
    }
  }, [networkConnected]);

  const navigateScreen = item => {
    navigation.navigate(NavigationRouteNames.USER_DETAILS, { item });
  };

  const handleBackPress = () => {
    BackHandler.exitApp();
  };

  return (
    <View style={styles.mainContainer}>
      <Header
        titleText={'User List'}
        rightButtonImage={Images.edit_user}
        onRightButtonClickHandler={() => { }}
        isBackButtonVisible={false}
        onBackPressHandler={handleBackPress}
      />
      {!isEmpty(usersData) && (
        <FlatList
          data={usersData}
          style={{ paddingHorizontal: RfW(16) }}
          renderItem={({ item, index }) => (
            <UserItem item={item} index={index} handleOpen={navigateScreen} />
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      )}
    </View>
  );
}

export default UserListing;

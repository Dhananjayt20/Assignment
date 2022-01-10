import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, BackHandler } from 'react-native';
import styles from './style';
import { RfH, RfW } from '../../utils/helpers';
import IconButtonWrapper from '../IconWrapper';
import Images from '../../theme/Images';

import Colors from '../../theme/Colors';
import { useFocusEffect } from '@react-navigation/core';

function Header(props) {
  const {
    titleText,
    onBackPressHandler,
    isRightButtonVisible,
    onRightButtonClickHandler,
    isBackButtonVisible,
    rightButtonImage,
    backGroundColor,
    titleTextColor,
  } = props;

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        onBackPressHandler();
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }, []),
  );

  const appAction = () => {
    if (isRightButtonVisible) {
      if (onRightButtonClickHandler) {
        onRightButtonClickHandler();
      }
    }
  };

  return (
    <View style={[styles.headerContainer, { backgroundColor: backGroundColor }]}>
      {isBackButtonVisible && (
        <IconButtonWrapper
          iconImage={Images.arrowBack}
          iconWidth={RfH(24)}
          iconHeight={RfH(20)}
          containerStyling={{
            justifyContent: 'center',
            paddingTop: RfH(24),
            paddingBottom: RfH(20),
            paddingHorizontal: RfW(18),
          }}
          submitFunction={onBackPressHandler}
        />
      )}
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingTop: RfH(24),
          paddingBottom: RfH(20),
          marginRight: isRightButtonVisible ? RfW(0) : RfW(50),
          marginLeft: isBackButtonVisible ? RfW(0) : RfW(50),
          justifyContent: 'center',
        }}>
        <Text style={[styles.headerText, { color: titleTextColor }]}>
          {titleText}
        </Text>
      </View>

      {isRightButtonVisible && (
        <View style={{ alignItems: 'flex-end' }}>
          <IconButtonWrapper
            iconImage={rightButtonImage}
            iconWidth={RfW(26.2)}
            iconHeight={RfH(26.2)}
            containerStyling={{
              alignSelf: 'center',
              paddingTop: RfH(24),
              paddingBottom: RfH(20),
              paddingHorizontal: RfW(18),
            }}
            submitFunction={appAction}
          />
        </View>
      )}
    </View>
  );
}

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  isRightButtonVisible: PropTypes.bool,
  isBackButtonVisible: PropTypes.bool,
  onBackPressHandler: PropTypes.func.isRequired,
  rightButtonImage: PropTypes.any,
  onRightButtonClickHandler: PropTypes.func,
  screen: PropTypes.string,
  backGroundColor: PropTypes.any,
  titleTextColor: PropTypes.any,
};

Header.defaultProps = {
  isRightButtonVisible: true,
  isBackButtonVisible: true,
  rightButtonImage: Images.edit_user,
  screen: '',
  backGroundColor: Colors.appBackgroundGrey,
  titleTextColor: Colors.black,
  titleText: '',
};

export default Header;

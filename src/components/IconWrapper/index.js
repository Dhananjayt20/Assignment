import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { getIconImageStyle } from './style';
import { getImageSource } from '../../utils/helpers';

function stylingIconButtonWrapper(props) {
  const {
    submitFunction,
    iconHeight,
    iconWidth,
    styling,
    imageResizeMode,
    onHold,
    onLeave,
    iconImage,
    placeHolderImage,
    displayLoadingImage,
    onPressIn,
    containerStyling,
  } = props;
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
  const imageObject = iconImage ? getImageSource(iconImage) : placeHolderImage;
  const sourceImage = isError ? getImageSource(placeHolderImage) : imageObject;

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.5}
        disabled={!(submitFunction || onHold || onLeave)}
        onLongPress={onHold}
        onPress={submitFunction}
        onPressIn={onPressIn}
        onPressOut={onLeave}
        style={containerStyling}>
        {displayLoadingImage ? (
          <ImageBackground
            imageStyle={[
              getIconImageStyle(iconHeight, iconWidth),
              styling,
              { resizeMode: imageResizeMode },
            ]}
            onError={() => setIsError(true)}
            onLoadEnd={() => setLoading(false)}
            source={sourceImage}
            style={[getIconImageStyle(iconHeight, iconWidth)]}>
            {(loading || isError) && (
              <Image
                source={placeHolderImage}
                style={[
                  getIconImageStyle(iconHeight, iconWidth),
                  styling,
                  { resizeMode: imageResizeMode },
                ]}
              />
            )}
          </ImageBackground>
        ) : (
          <Image
            source={sourceImage}
            style={[
              getIconImageStyle(iconHeight, iconWidth),
              styling,
              { resizeMode: imageResizeMode },
            ]}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

stylingIconButtonWrapper.propTypes = {
  backgroundColor: PropTypes.string,
  containerStyling: PropTypes.object,
  displayLoadingImage: PropTypes.bool,
  iconHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  iconImage: PropTypes.any,
  iconWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageResizeMode: PropTypes.string,
  onHold: PropTypes.func,
  onLeave: PropTypes.func,
  onPressIn: PropTypes.func,
  placeHolderImage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  styling: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  submitFunction: PropTypes.func,
};

stylingIconButtonWrapper.defaultProps = {
  backgroundColor: '#000',
  iconHeight: 50,
  iconWidth: 50,
  imageResizeMode: 'contain',
  onHold: null,
  onLeave: null,
  onPressIn: null,
  styling: {},
  containerStyling: {},
  submitFunction: null,
  placeHolderImage: '',
  displayLoadingImage: false,
};

export default stylingIconButtonWrapper;

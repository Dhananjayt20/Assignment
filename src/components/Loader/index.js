import React from 'react';
import { Modal, View, ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import Colors from '../../theme/Colors';
function Loader(props) {
  const { isLoading, text } = props;
  return (
    <>
      {isLoading ? (
        <>
          {Platform.OS === 'ios' ? (
            <View
              style={[
                styles.modalBackground,
                { backgroundColor: 'rgba(0,0,0,0.1)' },
              ]}>
              <View style={[styles.activityIndicatorWrapper]}>
                <ActivityIndicator size="large" color={Colors.globalTint} />
                <Text style={styles.title}>{text}</Text>
              </View>
            </View>
          ) : (
            <Modal
              visible={isLoading}
              animationType={'fade'}
              backdropOpacity={1}
              transparent={true}>
              <View
                style={[
                  styles.modalBackground,
                  { backgroundColor: 'rgba(0,0,0,0.1)' },
                ]}>
                <View style={[styles.activityIndicatorWrapper]}>
                  <ActivityIndicator size="large" color={Colors.globalTint} />
                  <Text style={styles.title}>{text}</Text>
                </View>
              </View>
            </Modal>
          )}
        </>
      ) : null}
    </>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.string,
};

Loader.defaultProps = {
  isLoading: false,
  text: 'Please wait ...',
};

export default Loader;

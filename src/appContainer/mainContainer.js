import React, { useEffect, useState } from 'react';
import { alertBox } from '../utils/helpers';

import { createStructuredSelector } from 'reselect';
import {
  isLoadingSelector,
  selectGlobalError,
  selectIsGlobalError,
} from './selectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import NetInfo from '@react-native-community/netinfo';

import { setCurrentNetworkState } from './actions';

let currentNetwork;
NetInfo.fetch().then(state => {
  currentNetwork = state.isConnected;
});

const stateSelector = createStructuredSelector({
  isLoading: isLoadingSelector,
  isError: selectIsGlobalError,
  error: selectGlobalError,
});

function MainContainer(props) {
  const { isLoading, isError, error } = useSelector(stateSelector);
  const dispatch = useDispatch();
  const [netInfo, setNetInfo] = useState(currentNetwork);

  const checkConnection = () => {
    const unsubscribe = NetInfo.addEventListener(state => {
      dispatch(setCurrentNetworkState.trigger(state.isConnected));
      setNetInfo(state.isConnected);
    });
    return () => unsubscribe();
  };

  useEffect(() => {
    checkConnection();
  }, []);

  useEffect(() => {
    if (isError && (error?.message || error?.title)) {
      alertBox(error?.title, error?.message);
    }
  }, [isError]);

  return (
    <>
      <Loader isLoading={isLoading} />
      {props.children}
    </>
  );
}

export default MainContainer;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import AppStack from '../routes/AppStack';
import { Provider } from 'react-redux';
import { store } from '../store/configureStore';
import Colors from '../theme/Colors';
import MainContainer from './mainContainer';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 0 }} />
        <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
        <MainContainer>
          <AppStack />
        </MainContainer>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserRoutes from '../containers/User/routes';
const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <>
            <Stack.Navigator headerMode="screen">{UserRoutes()}</Stack.Navigator>
        </>
    );
};
export default AppStack;

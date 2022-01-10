import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationRouteNames from '../../routes/ScreenName';

const Stack = createNativeStackNavigator();
import UserListing from './UserListing';
import UserDetails from './UserDetails';

const UserRoutes = () => (
    <>
        <Stack.Screen
            name={NavigationRouteNames.USER_LISTING}
            component={UserListing}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name={NavigationRouteNames.USER_DETAILS}
            component={UserDetails}
            options={{ headerShown: false }}
        />
    </>
);

export default UserRoutes;

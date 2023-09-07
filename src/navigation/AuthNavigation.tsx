import React, { FC } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "screens/Auth/SignIn";
import { Routes } from "./Routes";

export type RootStackParamList = {
    [Routes.SignIn]: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const AuthNavigation:FC = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
          }}
          initialRouteName={Routes.SignIn}>
          <Stack.Screen name={Routes.SignIn} component={SignIn} />
        </Stack.Navigator>
      );
};

export default AuthNavigation;
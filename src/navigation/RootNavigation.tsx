import React, { FC } from 'react';
import AuthNavigation from './AuthNavigation';
import { Routes } from './Routes';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
    [Routes.Welcome]: undefined;
    [Routes.SignIn]: undefined;
    [Routes.SignUp]: undefined;
  };


export const Stack = createStackNavigator<RootStackParamList>();

const RootNavigation:FC = () => {
	return <AuthNavigation />;
};

export default RootNavigation;
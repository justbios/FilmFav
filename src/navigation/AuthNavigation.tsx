import React, { FC } from 'react';
import SignIn from 'screens/Auth/SignIn';
import { Routes } from './Routes';
import Welcome from 'screens/Auth/Welcome';
import { Stack } from './RootNavigation';
import SignUp from 'screens/Auth/SignUp';

const AuthNavigation:FC = () => {
	return (
		<Stack.Navigator initialRouteName={Routes.Welcome} 
			screenOptions={{
				headerBackTitle: 'Back'
			}}
		>
			<Stack.Screen name={Routes.Welcome} component={Welcome} />
			<Stack.Screen name={Routes.SignIn} component={SignIn} />
			<Stack.Screen name={Routes.SignUp} component={SignUp} />
		</Stack.Navigator>
	);
};

export default AuthNavigation;
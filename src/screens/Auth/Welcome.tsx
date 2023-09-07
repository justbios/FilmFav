import Button from 'components/Button';
import Wrapper from 'components/Wrapper';
import { Routes } from 'navigation/Routes';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sizes } from 'utils/constants';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootNavigation';


const Welcome:FC<NativeStackScreenProps<RootStackParamList, Routes.Welcome>> = ({navigation}) => {

	const goToSignIn = () => navigation.navigate(Routes.SignIn);
	const goToSignUp = () => navigation.navigate(Routes.SignUp);


	return (
		<Wrapper>
			<View style={styles.logo}>
				<Text style={styles.textLogo}>FILMFAV</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Button onPress={goToSignIn}>
					<Text>Sign In</Text>
				</Button>
				<Button onPress={goToSignUp}>
					<Text>Sign Up</Text>
				</Button>
			</View>
		</Wrapper>
	);
};


const styles = StyleSheet.create({
	logo: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textLogo: {
		fontSize: Sizes.xxl,
		fontWeight: 'bold',
	},
	buttonsContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20
	}
});
  

export default Welcome;
import Button from 'components/Button';
import Input from 'components/Input';
import Wrapper from 'components/Wrapper';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Sizes } from 'utils/constants';


const SignUp:FC = () => {
	return (
		<Wrapper>
			<View style={styles.logo}>
				<Text style={styles.textLogo}>FILMFAV</Text>
			</View>
			<View style={styles.inputContainer}>
				<Input label='Name' onChangeText={console.log} />
				<Input label='Email' onChangeText={console.log} />
				<Input label='Password' onChangeText={console.log} />
				<Input label='Confirm Password' onChangeText={console.log} />
				<Button onPress={console.log}>
					<Text>Sign up</Text>
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
	inputContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 10
	}
});

export default SignUp;
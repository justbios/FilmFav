import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors } from 'utils/colors';
import { Sizes } from 'utils/constants';

interface IInputProps {
    label?: string;
    value?: string;
    onChangeText: (value: string) => void;
    placeholder?: string;
}

const Input:FC<IInputProps> = ({label, value, onChangeText, placeholder}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		maxHeight: 70
	},
	input: {
		width: 300,
		borderRadius: 8,
		borderColor: Colors.gray,
		borderWidth: 1,
		padding: 10,
		fontSize: Sizes.m,
		backgroundColor: Colors.white
	},
	label: {
		alignSelf:'flex-start',
		color: Colors.black,
		margin: 6
	}
});

export default Input;
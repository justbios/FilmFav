import React, { FC, PropsWithChildren } from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from 'utils/colors';


interface IButtonProps {
    onPress: () => void;
    style?: ViewStyle;
}

const Button:FC<PropsWithChildren<IButtonProps>> = ({children, onPress, style}) => (
	<TouchableOpacity onPress={onPress} style={[style, styles.container]}>
		{children}
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		width: '100%',
		maxWidth: 300,
		height: 50,
		backgroundColor: Colors.lightgreen,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10
	}
});

export default Button;
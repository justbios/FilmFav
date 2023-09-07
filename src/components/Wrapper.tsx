import React, { FC, PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'utils/colors';


const Wrapper:FC<PropsWithChildren> = ({children}) =>  (
	<SafeAreaView style={styles.container}>
		{children}
	</SafeAreaView>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: Colors.white,
	},
});

export default Wrapper;
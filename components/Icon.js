import * from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Icon extends React.Component {
	render() {
		return (
			<View style={styles.container}>
			<Text style={styles.paragraph}>
			</Text>
			<Image style={styles.logo} source={require("..assets/1024.png")}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  	container: {
    		alignItems: 'center',
    		justifyContent: 'center',
  	},
  	paragraph: {
    		margin: 24,
    		marginTop: 0,
    		fontSize: 14,
    		fontWeight: 'bold',
    		textAlign: 'center',
    		color: '#34495e',
  	},
  	logo: {
    		backgroundColor: "#056ecf",
    		height: 128,
    		width: 128,
  	}
});

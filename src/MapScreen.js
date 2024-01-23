import { View, Text, StyleSheet } from "react-native";


const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Map Screen</Text>
        </View>
    );
}

export default MapScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
});
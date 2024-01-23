import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import data from "./dataset/vehicles.json"
const dots = require('./assets/icons/dots.png');
const back = require('./assets/icons/left-arrow.png');

const image_v_1 = require('./assets/vehicles/v-1.png');
const image_v_2 = require('./assets/vehicles/v-2.png');
const image_v_3 = require('./assets/vehicles/v-3.png');
const image_v_4 = require('./assets/vehicles/v-4.png');



const InfoScreen = ({route, navigation}) => {

    const vehicle = data.vehicles.filter(
        (element) => element.id == route.params.id)[0];

    const getImage = (id) =>{
        if (id == 1) return image_v_1;
        if (id == 2) return image_v_2;
        if (id == 3) return image_v_3;
        if (id == 4) return image_v_4;
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <TouchableOpacity
                       onPress={()=> navigation.goBack()} >
                        <Image source={back} resizeMode="contain" style={styles.menuStyle} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>detail</Text>
                    <Image source={dots} resizeMode="contain" style={styles.faceStyles} />
                </View>
                <View style={styles.imageSection}>
                    <Image source={getImage(vehicle.id)} resizeMode="contain" style={styles.vehicleImage} />
                </View>

                <View style={styles.headSection}>
                    <View style={styles.topTextArea}>
                        <Text style={styles.makeModeText}>{vehicle.make} - {vehicle.model}</Text>
                    <Text style={styles.price}><Text style={styles.amount}>${vehicle.price_per_day}</Text> /day</Text>
                    </View>
                    <Text style={styles.typetranText}>{vehicle.type} - {vehicle.transmission}</Text>
                </View>
                <Text style={styles.descriptionText}>{vehicle.description}</Text>
                <Text style={styles.propertiesText}>Properties</Text>

                <View style={styles.propertiesArea}>
                    <View style={styles.level}>
                        <Text style={styles.propertyText}>Motor Power:
                            <Text style={styles.valueText}> {vehicle.properties.motor_power_hp} hp</Text>
                        </Text>
                        <Text style={styles.propertyText}>Engine Capacity:
                            <Text style={styles.valueText}> {vehicle.properties.engine_capacity_cc} cc</Text>
                        </Text>
                    </View>

                    <View style={styles.level}>
                        <Text style={styles.propertyText}>Fuel:
                            <Text style={styles.valueText}> {vehicle.properties.fuel_type}</Text>
                        </Text>
                        <Text style={styles.propertyText}>Traction:
                            <Text style={styles.valueText}> {vehicle.properties.traction}</Text>
                        </Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.rentButton}>
                    <Text style={styles.rentButtonText}>rent a car</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
       
    );
}

export default InfoScreen;

const styles = StyleSheet.create({
    safeArea:{
        flex:1
    },
    container:{
        flex: 1,
        paddingHorizontal:30
    },
    headerSection:{
        height:50,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    menuStyle:{
        width:25
    },
    faceStyles:{
        width:25
    },
    headerText:{
        fontSize:20,
        fontWeight:'500',
        textTransform:'capitalize'
    },
    imageSection:{
        width:'100%',
        height:250,
        justifyContent:'center',
        alignItems:'center',
    },
    vehicleImage:{
        width:300,
        height:300
    },
    headSection:{

    },
    topTextArea:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    makeModeText:{
        fontSize:20,
        fontWeight:'500'
    },
    price:{
        fontWeight:'400'
    },
    amount:{
        fontWeight:'bold'
    },
    typetranText:{
        marginTop:1,
        color:'#696969',
        fontWeight:'600',
        fontSize:12
    },
    descriptionText:{
        marginTop:30,
        fontSize:14,
        letterSpacing:0.1,
        lineHeight:18,
        color:'#696969',
        fontWeight:'500'
    },
    description:{},
    propertiesText:{
        marginTop:20,
        fontSize:19,
        fontWeight:'500'
    },
    propertiesArea:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    level:{
        marginRight:30
    },
    propertyText:{
        fontSize:12,
        color:'#696969'
    },
    valueText:{
        fontSize:12,
        color:'black'
    },
    rentButton:{
        marginTop:50,
        height:40,
        alignSelf:'center',
        width:250,
        backgroundColor:'black',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    rentButtonText:{
        color:'white',
        textTransform:'capitalize',
        fontWeight:'500'
    }
});
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const menu = require('./assets/icons/menu.png');
const face = require('./assets/face.png');
const magnifying_glass = require('./assets/icons/magnifying-glass.png');

const image_v_1 = require('./assets/vehicles/v-1.png');
const image_v_2 = require('./assets/vehicles/v-2.png');
const image_v_3 = require('./assets/vehicles/v-3.png');
const image_v_4 = require('./assets/vehicles/v-4.png');

import data from "./dataset/vehicles.json"
import { useState } from "react";

const HomeScreen = ({navigation}) => {
    const [vehicles, setVehicles] = useState(data.vehicles);
    const typeList = ['All','Suv','Sedan','Mpv','Hatchback'];
    const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);

    const getImage = (id) =>{
        if (id == 1) return image_v_1;
        if (id == 2) return image_v_2;
        if (id == 3) return image_v_3;
        if (id == 4) return image_v_4;
    }

    const searchVehicle = (keyword) => {
        const lowerCasedKeyword = keyword.toLowerCase();
        const results = vehicles.filter(vehicle => {
            return vehicle.make.toLowerCase().includes(lowerCasedKeyword)
        })
        setFilteredVehicles(results);
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerSection}>
                    <Image source={menu} resizeMode="contain" style={styles.menuStyle} />
                    <Image source={face} resizeMode="contain" style={styles.faceStyles} />
                </View>

                <View style={styles.titleSection}>
                    <Text style={styles.title}>rent a car</Text>
                </View>
                <View style={styles.searchSection}>
                    <View style={styles.searchPallet}>
                        <TextInput placeholder="Search Car,,,,," 
                            style={styles.searchInput} 
                            onChangeText={(text)=> searchVehicle(text)}
                        />
                        <View style={styles.searchArea}>
                            <Image source={magnifying_glass} resizeMode="contain" style={styles.magnifyStyles} />
                        </View>
                    </View>
                </View>
                <View style={styles.typesSection}>  
                   {typeList.map(item => (
                    <Text style={styles.typeText}>{item}</Text>
                   ))}
                </View>
                <View style={styles.listSection}>
                    <Text style={styles.headText}>most rented</Text>
                    <ScrollView style={styles.elementPallet}>
                        {
                            filteredVehicles.map(vehicle =>{
                                return (
                                    <TouchableOpacity 
                                        style={styles.element} 
                                        key={vehicle.id}
                                        activeOpacity={0.8}
                                        onPress={() => navigation.navigate('Info',{id: vehicle.id})}
                                        >
                                        <View style={styles.infoArea}>
                                        <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model}</Text>
                                        <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
                                        <Text style={styles.infoPrice}>
                                            <Text style={styles.infoAmount}>${vehicle.price_per_day}</Text>/day
                                        </Text>
                                        </View>
                                        <View style={styles.imageArea}>
                                       <Image source={getImage(vehicle.id)} resizeMode="contain" style={styles.vehicleImage} />
                                    </View>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;

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
        width:30
    },
    faceStyles:{
        width:45
    },
    titleSection:{
        marginTop:15
    },
    title:{
        fontSize:32,
        textTransform:'capitalize',
        fontWeight:'600'
    },
    searchSection:{
        marginTop:15,
        paddingHorizontal:15,
        justifyContent:'center'
    },
    searchPallet:{
        paddingHorizontal:10,
        flexDirection:'row',
        borderRadius:8,
        width:'100%',
        height:35,
        backgroundColor:'white'
    },
    searchInput:{
        width:245,
        height:35
    },
    searchArea:{
        width:35,
        height:35,
        justifyContent:'center',
        alignItems:'center'
    },
    magnifyStyles:{
        width:24,
        height:24,
        marginRight:7
    },
    typesSection:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    typeText:{
        fontSize:15,
        fontWeight:'500',
        color:'#696969'
    },
    typeTextBold:{
        color:'black',
        fontWeight:'bold'
    },
    listSection:{
        marginTop:25
    },
    headText:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        textTransform:'capitalize'
    },
    elementPallet:{
        width:'110%',
        marginLeft:-15,
        paddingHorizontal:15
    },
    element:{
        padding:15,
        height:100,
        borderRadius:10,
        backgroundColor:'white',
        flexDirection:'row',
        marginBottom:13
    },
    infoArea:{
        flex:1
    },
    infoTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    infoSub:{
        fontSize:12,
        fontWeight:'600',
        color:'#696969'
    },
    infoPrice:{
        position:'absolute',
        bottom:0,
        fontSize:12,
        color:'#696969',
        fontWeight:'600'
    },
    infoAmount:{
        fontSize:12,
        color:'black',
        fontWeight:'600'
    },
    imageArea:{
        flex:1
    },
    vehicleImage:{
        position:'absolute',
        top:-15,
        left:-15,
        width:'140%',
        height:'140%'
    }
});
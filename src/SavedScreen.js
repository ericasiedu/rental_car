import { useState,useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";


const SavedScreen = () => {
    const [data,setData] = useState([]);
    useEffect(() => {
        getCountries();
    },[]);

    // const getCountries = () => {
    //     const countries = [{id:1,name:'Ghana'},{id:2,name:'Ivory Coast'}];
    //     setData(countries);
    // }

    const getCountries = async () => {
        try {
            const mainUrl = 'http://crowdenfund.test/users/getCountries';
            const rockUrl = 'http://172.20.10.9/rocks';
            const response = await fetch(rockUrl);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            console.error('Error details:', error.message);
        }
    }

    return (
       <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    {data.map(item => (<Text key={item.id}>{item.name}</Text>))}
                </View>
            </ScrollView>
       </SafeAreaView>
    );
}

export default SavedScreen;

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30
    }
});
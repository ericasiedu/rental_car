import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './src/HomeScreen';
import MapScreen from './src/MapScreen';
import SavedScreen from './src/SavedScreen';
import SettingsScreen from './src/SettingsScreen';
import InfoScreen from './src/InfoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeIcon_active = require('./src/assets/icons/home-active.png');
const homeIcon = require('./src/assets/icons/home.png');
const mapIcon_active = require('./src/assets/icons/compass-active.png');
const mapIcon = require('./src/assets/icons/compass.png');
const savedIcon_active = require('./src/assets/icons/saved-active.png');
const savedIcon = require('./src/assets/icons/saved.png');
const settingIcon_active = require('./src/assets/icons/settings-active.png');
const settingIcon = require('./src/assets/icons/settings.png');

const HomeStack = () => {
  return (
    <Stack.Navigator 
      screenOptions={{headerShown:false}} >
      <Stack.Screen name='Initial' component={HomeScreen} />
      <Stack.Screen name='Info' component={InfoScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          headerShown:false,
          tabBarIcon:({focused})=> {
            let iconName;

            if(route.name === 'Home'){
              iconName = focused ? homeIcon_active : homeIcon;
            }
            else if(route.name === 'Map'){
              iconName = focused ? mapIcon_active : mapIcon;
            }
            else if(route.name === 'Saved'){
              iconName = focused ? savedIcon_active : savedIcon;
            }
            else if(route.name === 'Settings'){
              iconName = focused ? settingIcon_active : settingIcon;
            }

            return (
              <Image source={iconName} resizeMode='contain' style={styles.footerIcon} />
            )
          },
          tabBarShowLabel:false,
          tabBarStyle:{
            position:"absolute",
            padding:10,
            backgroundColor:'black',
            borderTopStartRadius:40,
            borderTopEndRadius:40
          }
        })}>
        <Tab.Screen name='Home' component={HomeStack} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Saved' component={SavedScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIcon:{
    width:25
  }
});

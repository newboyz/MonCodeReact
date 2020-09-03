import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';



import HomeScreen from './Screens/HomeScreen';
import DetailsScreen from './Screens/DetailsScreen';
import JournalScreen from './Screens/JournalScreen';
import ParametreScreen from './Screens/ParametreScreen';
import PartagerScreen from './Screens/PartagerScreen';
import VideoHome from './Screens/VideoHome'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const JournalStack = createStackNavigator();
const ParametreStack = createStackNavigator();
const PartagerStack = createStackNavigator();
const VideoStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#200000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
          title: 'UAC WEB TV',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </HomeStack.Navigator>

);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#800000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <DetailsStack.Screen name="Reportage" component={DetailsScreen}
        options={{
          title: 'Reportage',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />
      </DetailsStack.Navigator>

);

const JournalStackScreen = ({navigation}) => (
  <JournalStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <JournalStack.Screen name="Home" component={HomeScreen} options={{
          title: 'Journal',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </JournalStack.Navigator>

);

const ParametreStackScreen = ({navigation}) => (
  <ParametreStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <ParametreStack.Screen name="Parametre" component={ParametreScreen} options={{
          title: 'Parametre',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </ParametreStack.Navigator>

);

const PartagerStackScreen = ({navigation}) => (
  <PartagerStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <PartagerStack.Screen name="Partager" component={PartagerScreen} options={{
          title: 'Partager',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </PartagerStack.Navigator>

);

const VideoStackScreen = ({navigation}) => (
  <VideoStack.Navigator screenOption = {{
        headerStyle: {
          backgroundColor: '#000'
        },
        headerTintColor: '#300000',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <VideoStack.Screen name="Video" component={VideoHome} options={{
          title: 'Video',
          headerStyle: {
           backgroundColor: '#000',
         },
         headerTintColor: '#fff',
          headerLeft: () => (
            <Icon.Button name='ios-menu' size={25}
            backgroundColor='#000' onPress={() => {navigation.openDrawer()}}
            ></Icon.Button>
          )
        }} />

      </VideoStack.Navigator>

);

function App() {



  return (
    <NavigationContainer  >
    <Drawer.Navigator initialRouteName="Home" drawerStyle={{
    backgroundColor: '#FFDD00',

  }}>
      <Drawer.Screen name="Accueil" component={HomeStackScreen} />
      <Drawer.Screen name="Reportage" component={DetailsStackScreen} />
      <Drawer.Screen name="Journal" component={JournalStackScreen} />
      <Drawer.Screen name="Parametre" component={ParametreStackScreen} />
      <Drawer.Screen name="Partager" component={PartagerStackScreen} />
      
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

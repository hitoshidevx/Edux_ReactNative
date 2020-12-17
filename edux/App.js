import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

// Navigationsyarn add @react-navigation/stack
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Pages
import Home from './pages/Home';
import Turma from './pages/Turma';
import Login from './pages/login';
import TimeLine from './pages/timeline';
import Objetivo from './pages/Objetivo';

const Autenticado = () =>{

  return(
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';

            } else if (route.name === 'Turma') {
              iconName = 'graduation-cap';

            } else if (route.name === 'Dicas') {
              iconName = 'stream';

            } else if (route.name === 'Objetivos') {
              iconName = 'bullseye';
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#00D65F',
            borderStyle: 'solid',
          },
          activeTintColor: 'white',
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#00B751',
          inactiveBackgroundColor: '#00D65F',
        }}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Turma" component={Turma} />
          <Tab.Screen name="Objetivos" component={Objetivo} />
          <Tab.Screen name="Dicas" component={TimeLine} />
      </Tab.Navigator>
  )

}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verde: {
    backgroundColor: '#00D65F',
  },
});

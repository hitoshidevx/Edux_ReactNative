import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Navigationsyarn add @react-navigation/stack
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Pages
import Home from './pages/Home';
import Alunos from './pages/Alunos';
import Turma from './pages/Turma';
import Login from './pages/login';

const Autenticado = () =>{

  return(
    <NavigationContainer style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Alunos') {
              iconName = focused ? 'ios-contacts' : 'ios-contacts';
            } else if (route.name === 'Turma') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          style: {
            backgroundColor: '#00D65F',
            borderStyle: 'solid',
          },
          activeTintColor: 'white',
          inactiveTintColor: '#333',
        }}
      >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Alunos" component={Alunos} />
          <Tab.Screen name="Turma" component={Turma} />
          <Tab.Screen name="Autenticado" component={Autenticado} />
      </Tab.Navigator>
    </NavigationContainer>
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

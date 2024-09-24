import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomePage from './screens/HomePage';
import SettingsScreen from './screens/SettingScreen';
import PhotoScreen from './screens/PhotoScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarStyle: {
      backgroundColor: '#060663',
    },
    tabBarIcon: ({ size, color }) => {
      let iconName;

      switch (route.name) {
        case 'Doklady':
          iconName = 'home';
          break;
        case 'Scanner':
          iconName = 'plus';
          break;
        case 'Nápověda':
          iconName = 'help';
          break;
        default:
          iconName = 'home';
      }

      return <MaterialCommunityIcons name={iconName} size={size} color={'white'} />;
    },
  })}
>
  <Tab.Screen name="Doklady" component={HomePage} />
  <Tab.Screen name="Scanner" component={PhotoScreen} />
  <Tab.Screen name="Nápověda" component={SettingsScreen} />
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
});

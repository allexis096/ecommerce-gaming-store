import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import GameCart from '../pages/GameCart';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTitle: 'Gaming Store',
      headerTitleStyle: { fontFamily: 'Roboto-Bold' },
      headerStyle: { backgroundColor: '#18181B' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
      cardStyle: { backgroundColor: '#18181B' },
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="GameCart" component={GameCart} />
  </App.Navigator>
);

export default AppRoutes;

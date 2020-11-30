import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerTitle: 'Gaming Store',
      cardStyle: { backgroundColor: '#18181B' },
      headerStyle: { backgroundColor: '#18181B' },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}
    initialRouteName="Dashboard"
  >
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;

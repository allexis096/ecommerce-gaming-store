import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { GameProvider } from './hooks/store';
import AppRoutes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <GameProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#18181B" />
      <AppRoutes />
    </GameProvider>
  </NavigationContainer>
);

export default App;

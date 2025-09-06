import React from 'react';
import { Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import DemonListScreen from './src/screens/DemonListScreen';
import DemonDetailsScreen from './src/screens/DemonDetailsScreen';

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer
        theme={{
          ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white'}
        }}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="DemonListScreen"
            component={DemonListScreen}
            options={{ title: 'Demon Slayer' }}
          />
          <Stack.Screen
            name="DemonDetailsScreen"
            component={DemonDetailsScreen}
            options={{ title: 'Detalhes' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
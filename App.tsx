import { NavigationContainer } from '@react-navigation/native';
import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.drker : Colors.lighter,
  // };

  return (
    <NativeBaseProvider>
      <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};

export default App;

import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.drker : Colors.lighter,
  // };

  return (
    <NativeBaseProvider>
      <Box>Hello world</Box>
    </NativeBaseProvider>
  );
};

export default App;

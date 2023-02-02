import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes/Routes';
import { GlobalProvider } from './src/context/GlobalContext';

export default function App() {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={"light-content"}
          translucent={true}
        />
        <Routes />
      </ThemeProvider>
    </GlobalProvider>
  );
}
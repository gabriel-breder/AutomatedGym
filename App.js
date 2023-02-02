import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes/Routes';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={"light-content"}
        translucent={true}
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
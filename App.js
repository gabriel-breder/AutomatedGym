import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { MainStack } from './src/routes/MainStack';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loading } from './src/components/Loading';
import { GlobalProvider } from './src/context/GlobalContext';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold });

  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle={"light-content"}
          translucent={true}
        />
        {fontsLoaded ? <MainStack /> : <Loading />}
      </ThemeProvider>
    </GlobalProvider>
  );
}
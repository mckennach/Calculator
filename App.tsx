import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

// REDUX
import { AppDispatch } from './app/store'
import { Provider } from 'react-redux'

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>

          <Navigation colorScheme={colorScheme} />
          <StatusBar />

      </SafeAreaProvider>
    );
  }
}

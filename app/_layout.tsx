import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { SQLiteProvider } from 'expo-sqlite';
import OfflineBanner from '../components/OfflineBanner';
import { initDatabase } from '../db/database';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({});
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded && dbReady) SplashScreen.hideAsync();
  }, [fontsLoaded, dbReady]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      <SQLiteProvider
        databaseName="quiz.db"
        onInit={async (db) => {
          await initDatabase(db);
          setDbReady(true);
        }}
      >
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="quiz"   options={{ headerShown: false }} />
          <Stack.Screen name="result" options={{ headerShown: false }} />
        </Stack>
      </SQLiteProvider>
      <OfflineBanner />
    </View>
  );
}

const styles = StyleSheet.create({ root: { flex: 1 } });

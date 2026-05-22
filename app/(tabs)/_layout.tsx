import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown:            false,
        tabBarActiveTintColor:  '#0ebafc',
        tabBarInactiveTintColor:'#adb5bd',
        tabBarStyle: {
          paddingBottom: insets.bottom,
          height: 60 + insets.bottom,
        },
      }}
    >
      <Tabs.Screen name="index"    options={{ title: 'Home',     tabBarIcon: ({ color, size }) => <Ionicons name="home-outline"                size={size} color={color} /> }} />
      <Tabs.Screen name="history"  options={{ title: 'History',  tabBarIcon: ({ color, size }) => <Ionicons name="time-outline"                size={size} color={color} /> }} />
      <Tabs.Screen name="settings" options={{ title: 'Settings', tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline"            size={size} color={color} /> }} />
      <Tabs.Screen name="about"    options={{ title: 'About',    tabBarIcon: ({ color, size }) => <Ionicons name="information-circle-outline"  size={size} color={color} /> }} />
    </Tabs>
  );
}
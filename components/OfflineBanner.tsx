import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { Ionicons } from '@expo/vector-icons';

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);
  const slideAnim = useState(new Animated.Value(-50))[0];

  const applyState = (connected: boolean | null) => {
    const offline = connected === false;
    setIsOffline(offline);
    Animated.timing(slideAnim, {
      toValue: offline ? 0 : -50,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    // Check real state at mount so banner shows immediately if already offline
    NetInfo.fetch().then(state => applyState(state.isConnected));
    const unsub = NetInfo.addEventListener(state => applyState(state.isConnected));
    return unsub;
  }, []);

  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.banner, { transform: [{ translateY: slideAnim }] }]}
    >
      <Ionicons name="cloud-offline-outline" size={16} color="#fff" />
      <Text style={styles.text}>You are offline — quiz works normally</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  banner: {
    position:        'absolute',
    top:             0,
    left:            0,
    right:           0,
    zIndex:          999,
    backgroundColor: '#6c757d',
    flexDirection:   'row',
    alignItems:      'center',
    justifyContent:  'center',
    gap:             8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  text: { color: '#fff', fontSize: 13 },
});
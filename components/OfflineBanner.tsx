import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { Ionicons } from '@expo/vector-icons';

export default function OfflineBanner() {
  const [isOffline, setIsOffline]   = useState(false);
  const slideAnim                   = useState(new Animated.Value(-50))[0];

  useEffect(() => {
    const unsub = NetInfo.addEventListener(state => {
      const offline = !state.isConnected;
      setIsOffline(offline);

      Animated.timing(slideAnim, {
        toValue:        offline ? 0 : -50,
        duration:       300,
        useNativeDriver: true,
      }).start();
    });
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
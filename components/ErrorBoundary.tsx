import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface State { hasError: boolean; message: string }

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>, State
> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message ?? 'Unknown error' };
  }

  reset = () => this.setState({ hasError: false, message: '' });

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <View style={styles.container}>
        <Text style={styles.emoji}>⚠️</Text>
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.message}>{this.state.message}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.reset}>
          <Text style={styles.btnText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f4ff', padding: 32 },
  emoji:     { fontSize: 48, marginBottom: 16 },
  title:     { fontSize: 20, fontWeight: '800', color: '#1a2340', marginBottom: 10 },
  message:   { fontSize: 13, color: '#6b7280', textAlign: 'center', lineHeight: 20, marginBottom: 28 },
  btn:       { backgroundColor: '#1e3c72', borderRadius: 12, paddingHorizontal: 28, paddingVertical: 13 },
  btnText:   { color: '#fff', fontWeight: '800', fontSize: 15 },
});

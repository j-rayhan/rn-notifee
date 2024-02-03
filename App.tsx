/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Notifee Demo</Text>
      <Text style={styles.instructions}>
        To get started, edit content.tsx
      </Text>
      <Text style={styles.instructions}>Notifee Version</Text>
      {/* <Text style={styles.instructions}>{notifee.SDK_VERSION}</Text> */}
    </View>
  );
}

export default App;

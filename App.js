import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Boxes from './components/Boxes';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Boxes />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

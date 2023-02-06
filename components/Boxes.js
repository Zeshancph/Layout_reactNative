import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
export default function Boxes() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 1</Text>
          </View>                      
        </View>
        <View style={styles.box}>
          <View style={styles.inner}>
            <Text>Box 2</Text>
          </View>                      
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "85%",
      alignItems: "center",
      flexDirection: 'row',
      flexWrap: 'wrap'    
    },
    box: {
      width: "50%",
      height: "50%",
      padding: 5
    },
    inner: {
      flex: 1,
      backgroundColor: "#D3D3D3",
      alignItems: 'center',
      justifyContent: 'center'
    }
  });
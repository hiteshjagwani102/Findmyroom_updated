import React,{useState, useEffect} from 'react'
import { View, Text,StyleSheet,Alert,Dimensions,KeyboardAvoidingView} from 'react-native'
import { TextInput,Button} from 'react-native-paper'

const Description = ({route, navigation}) => {
  const {desc, landMrk, size, price, maxCap, image, address, phone} = route.params;
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 12 }}>
        <Text style={styles.text}><Text style ={{fontSize:24}}>About</Text>: {desc}</Text>
        <Text style={styles.text}>LandMark: {landMrk}</Text>
        <Text style={styles.text}>Apartment Size: {size}</Text>
        <Text style={styles.text}>Price: Rs {price}</Text>
        <Text style={styles.text}>BHK: {maxCap}</Text>
        <Text style={styles.text}>Address: {address}</Text>
        <Text style={styles.text}>Contact No.: {phone}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{
        margin:10
    },

    heading:{
        fontSize: 24
    }
     });

export default Description
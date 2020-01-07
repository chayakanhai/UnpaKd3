import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image, TouchableOpacity } from "react-native";
import SignUp from "../Screens/SignUp";
import SafeAreaView from 'react-native-safe-area-view';
class Home extends Component {
    render() {
        return ( 
            <SafeAreaView style={{ flex: 1, backgroundColor: 'blue' }}>
            <View style = { styles.container } > 
            <View style = { styles.logoContainer } >
                <Image style = { styles.logo }
                    source = {require("../../assets/icon.png") } >
                </Image>
                {/*<Button style={{color: 'green'}}
                title='GO FIND STORES!'
        onPress={()=> this.props.navigation.navigate('Map')} /> */}
             <TouchableOpacity
                style={styles.button}
                onPress={()=> this.props.navigation.navigate('Map')}
       >
                <Text style={{color: 'white'}}> 'GO FIND STORES!' </Text>
            </TouchableOpacity>
            <View style={styles.infoContainer}>
            <Text style={styles.title}>Plasticfree food shopping for a better world!</Text>
                {/*<Button backgroundColor='green'
                title='Sign UP as a store'
    onPress={()=> this.props.navigation.navigate('SignUp')} />*/}
                 <TouchableOpacity
                style={styles.button2}
                onPress={()=> this.props.navigation.navigate('SignUp')}
    >
                <Text style={{color: 'white'}}> 'SIGN IN AS A STORE' </Text>
            </TouchableOpacity> 
           
            </View>
            </View > 
            </View>
           </SafeAreaView>
       
        );
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
        width: "100%",
        height: "100%",
        padding: 50,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'orange',
        padding: 10
      },
      button2: {
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10
      },
   
    logo: {
        width: '100%',
        height: 300,
        marginTop: 10,
        position: 'absolute'
    },
    
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 400
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 20, 
        height: 50,
        padding: 20,
        
    },
    
})



export default Home;
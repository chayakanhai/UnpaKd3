import React, { Component } from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
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
            <View style={styles.infoContainer}>
            <Text style={styles.title}>Plasticfree food shopping for a better world!</Text>
                <Button style= {styles.button}
                title='Sign UP as a store'
                 onPress={()=> this.props.navigation.navigate('SignUp')} /> 
           
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
   
    logo: {
        width: '100%',
        height: 300,
        marginTop: 10,
        position: 'absolute'
    },
    
    title: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 400
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0, 
        height: 50,
        padding: 20,
        
    },
    button: { 
      color: 'red'
    }
})



export default Home;
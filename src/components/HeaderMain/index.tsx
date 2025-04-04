
import React from "react";
import { View, Image, Text } from "react-native";
import styles from './styles'
import {Entypo} from '@expo/vector-icons';

function index() {
    return(
        <View style = {styles.headerMain}>
            <View style = {styles.headerOne}>

                <Image style={styles.image} source={{uri: "https://img.favpng.com/16/5/10/house-a-b-c-remonty-oleba-png-favpng-pFN1LWyWrnG03tcfnuVNXmVKX.jpg"}}/>

                <View style = {styles.headerOneView}>

                    <Text style={{ fontSize: 16, fontWeight: '700' }}>  Ev</Text>

                    <Text style={{ fontSize: 11.5, fontWeight: '600', color: '#6E7480', marginLeft: 9, marginRight: 6 }}>Altınayak Blv.  Şelale Mah...</Text>

                    <Entypo name="chevron-small-right" size={30} color="#5D3EBD" />

                </View>

                <View style = {styles.headerTwo}>
                    <Text style = {{fontSize: 10, fontWeight: 'bold', color: '#5D3EBD'}}>TVS</Text>
                    <Text style = {{fontSize: 20, fontWeight: 'bold', color: '#5D3EBD'}}>13<Text  style = {{fontSize: 16, color: '#5D3EBD'}}> dk</Text> </Text>
                </View>
                
            </View>

            <View>

            </View>
        </View>
    )
}

export default index
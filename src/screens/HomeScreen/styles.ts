import { StyleSheet, Dimensions } from "react-native";

const {height} = Dimensions.get('window') //ekranıma göre büyüsün küçülsün
const styles = StyleSheet.create({
    headerMain: {
        height: height * 0.064, //KENDİ EKRANIMIN 64 KATI
        backgroundColor: '#F7D102'
    },
    headerOne: {
        height: height * 0.064,
        width: '80%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25

    },
    image: {
        height: 30,
        width: 30
    },
    headerOneView: {
        flexDirection: 'row', //sıralı olması için
        alignItems: 'center',
        marginLeft: 10,
        paddingRight:8,
        borderLeftColor: 'black',
        borderLeftWidth: 4,
        
    },
   
})

export default styles
import {View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { Image } from 'react-native';
export default function App() {
    return(
        <View style = {styles.container}>
            <View style = {styles.subContainer}>
                <Text style = {styles.textHeader}>PASSWORD GENERATOR</Text>
                <View style = {styles.contentInputPass}>
                    <input style = {styles.inputPassword}></input>
                </View>
                <View style = {styles.contentPasslength}>
                    <Text style = {styles.textPasslength}>Password length</Text>
                    <View style = {styles.contentInputPassLength}>
                        <TextInput style = {styles.inputPasslength}></TextInput>
                    </View>
                </View>
                <View style = {styles.contentCheck1}>
                    <Text style = {styles.textCheck1}>Include lower case letters</Text>
                    <TouchableOpacity style = {styles.btnCheck1}>
                        <Image style = {styles.imgCheck11} source={require('../img/Line1.png')}></Image>
                        <Image style = {styles.imgCheck12} source={require('../img/Line2.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {styles.contentCheck2}>
                    <Text style = {styles.textCheck2}>Include upcase letters</Text>
                    <TouchableOpacity style = {styles.btnCheck2}>
                    </TouchableOpacity>
                </View>
                <View style = {styles.contentCheck3}>
                    <Text style = {styles.textCheck3}>Include number</Text>
                    <TouchableOpacity style = {styles.btnCheck3}>
                        <Image style = {styles.imgCheck21} source={require('../img/Line1.png')}></Image>
                        <Image style = {styles.imgCheck22} source={require('../img/Line2.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {styles.contentCheck4}>
                    <Text style = {styles.textCheck4}>Include special symbol</Text>
                    <TouchableOpacity style = {styles.btnCheck4}>
                    </TouchableOpacity>
                </View>
                <View style = {styles.contentBtnFooter}>
                    <TouchableOpacity style = {styles.btnGeneratePass}>
                    <Text style = {styles.textBtnGeneratePass}>GENERATE PASSWORD</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            
        </View>
    );
}

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundImage: 'radial-gradient(#3B3B98 55%, #C4C4C400 100%)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subContainer: {
        flex: 0.92,
        backgroundColor: "#23235B",
        width: 340,
        height: 620,
        borderRadius: 15,
        alignItems: 'center',
    },
    textHeader:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        top: 40,
    },
    contentInputPass: {
        top: 80,
    },
    inputPassword:{
        backgroundColor: '#151537',
        width: 310,
        height: 55,
    },
    contentPasslength:{
        top: 100,
        flex: '10%',
        width: "100%",
        flexDirection: 'row',
    },
    textPasslength: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        left: 20,
    },
    contentInputPassLength:{
        left: 45,
    },
    inputPasslength: {
        backgroundColor: '#FFFFFF',
        width: 110,
        height: 33,
        color: 'white'
    },
    contentCheck1: {
        width: '100%',
        flexDirection: 'row',
        top: -150,
    },
    textCheck1: {
        color: 'white',
        fontSize: 20,
        left: 20,
        fontWeight: 'bold',
    },
    btnCheck1: {
        backgroundColor: 'white',
        width: 27,
        height: 27,
        left: 62,
    },    
    imgCheck11: {
        width: 14,
        height: 14,
        top: 10,
    },
    imgCheck12: {
        width: 20,
        height: 20,
        top: -10,
        left: 8,
    },
    contentCheck2: {
        width: '100%',
        flexDirection: 'row',
        top: -130,
    },
    textCheck2: {
        color: 'white',
        fontSize: 20,
        left: 20,
        fontWeight: 'bold',
    },
    btnCheck2: {
        backgroundColor: 'white',
        width: 27,
        height: 27,
        left: 95,
    },    
    contentCheck3: {
        width: '100%',
        flexDirection: 'row',
        top: -110,
    },
    textCheck3: {
        color: 'white',
        fontSize: 20,
        left: 20,
        fontWeight: 'bold',
    },
    btnCheck3: {
        backgroundColor: 'white',
        width: 27,
        height: 27,
        left: 150,
    },    
    imgCheck21: {
        width: 14,
        height: 14,
        top: 10,
    },
    imgCheck22: {
        width: 20,
        height: 20,
        top: -10,
        left: 8,
    },
    contentCheck4: {
        width: '100%',
        flexDirection: 'row',
        top: -90,
    },
    textCheck4: {
        color: 'white',
        fontSize: 20,
        left: 20,
        fontWeight: 'bold',
    },
    btnCheck4: {
        backgroundColor: 'white',
        width: 27,
        height: 27,
        left: 86,
    },
    btnGeneratePass:{
        height: 65,
        width: 275,
        top: -40,
        backgroundColor: '#3b3b98',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnGeneratePass:{
        color: 'white',
        fontSize: 19,
        fontWeight: 'bold',
    }

})
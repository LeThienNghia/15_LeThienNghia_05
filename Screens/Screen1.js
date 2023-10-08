import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



function Cau2a() {
var [name, setName] = useState('')
var [password, setPassword] = useState('')

const dataset = [
    {
        name: 'a',
        password: '123'
    },
    {
        name: 'Le Van A',
        password: '123'
    },
    {
        name: 'Le Van B',
        password: '123'
    }
]

const result = {name: name, password: password}

    return ( 
        <View style={styles.wrapper}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input} placeholder="Name" onChangeText={setName}/>
                <TextInput style={styles.input} placeholder="Password "  onChangeText={setPassword}/>
                <Image style={[styles.inputImg, styles.inputImg1]} source={require('../img/avatar_user1.png')} />
                <Image style={[styles.inputImg, styles.inputImg2]} source={require('../img/lock-1528791.png')} />
                <Image style={[styles.inputImg, styles.inputImg3]} source={require('../img/eye1.png')} />
            </View>
            <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btn} onPress={()=>{
                   
                }}>
                    <Text style={styles.btnTxt}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.txtCreateAccount}>Forgot your password?</Text>
            
        </View>
     );
}

export default Cau2a;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundImage: 'linear-gradient(#FBCB00, #BF9A00)',
    },
    title: {
        fontSize: 30,
        fontWeight: 700,
        fontFamily: 'Roboto',
        marginTop: 80,
        marginLeft: 30,
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
        position: 'relative',
    },
    input: {
        backgroundColor: 'rgba(196, 196, 196, 0.3)',
        // opacity: 0.3,
        borderWidth: 1,
        borderColor: '#F2F2F2',
        marginTop: 20,
        width: 330,
        height: 54,
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'Roboto',
        paddingLeft: 55,
    },
    inputImg: {
        width: 32,
        height: 32,
        position: 'absolute',
    },
    inputImg1: {
        left: 40,
        top: 30,
    },
    inputImg2: {
        left: 40,
        top: 105,
    },
    inputImg3: {
        right: 50,
        bottom: 10,
    },
    btnWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 50,
    },
    btn: {
        backgroundColor: '#000',
        width: 330,
        height: 54,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
    },
    btnTxt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
    },
    txtCreateAccount: {
        fontSize: 20,
        fontWeight: 700,
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 50,
    },
    
})
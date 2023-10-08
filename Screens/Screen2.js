import{View, Text, Image, Button, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';


export default function App(){
    return(
        <View style = {styles.container}>
        
            <View style = {styles.header}>
                <View style = {styles.headerUsb}>
                    <Image style = {styles.imgUsb} source={require('../img/usb.png')} >
                    </Image>
                </View>
                <View style = {styles.headerTextGroup}>
                    <Text style = {styles.headerText}>USB Bluetooth Music Receiver</Text>
                    <Text style = {styles.headerText}>HJX-001- Biến loa thường thành loa</Text>
                    <Text style = {styles.headerText}>bluetooth</Text>
                </View>
                
            </View>
            <View style = {styles.contentReport}>
                <Text style = {styles.textReport}>
                    Cực kỳ hài lòng
                </Text>
                <View style = {styles.starGroup}>
                    <Image style = {styles.star} source={require('../img/Star1.png')}></Image>
                    <Image style = {styles.star} source={require('../img/Star1.png')}></Image>
                    <Image style = {styles.star} source={require('../img/Star1.png')}></Image>
                    <Image style = {styles.star} source={require('../img/Star1.png')}></Image>
                    <Image style = {styles.star} source={require('../img/Star1.png')}></Image>
                </View>
            </View>
            <View style = {styles.containAddImage}>
                <Image style = {styles.iconCamera} source={require('../img/camera.png')}></Image>
                <Text style = {styles.textAddImage}>Thêm hình ảnh</Text>
            </View>
            <View style = {styles.containShare}>
                <Text style = {styles.textShare1}>Hãy chia sẻ những điều bạn thích về sản phẩm</Text>
                <Text style = {styles.textShare2}>https://meet.google.com/nsj-ojwi-xpp</Text>
            </View>
            <TouchableOpacity style = {styles.btnSendFooter}>
                <Text style = {styles.textBtnSend}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header:{
        flexDirection: 'row',
    },
    headerUsb: {
        width: 80,
        height: 80,
        marginTop: 23,
        marginLeft: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgUsb:{
        width: 64.5,
        height: 59,
    },
    headerTextGroup: {
        flexDirection: 'column',
        top: 29,

    },
    headerText:{
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        lineHeight: 18.75,
    },
    contentReport: {
        alignItems: 'center',
    },
    textReport:{
        top: 40,
        fontSize: 22,
        fontWeight: 'bold',
    },
    starGroup: {
        flexDirection: 'row',
        top: 57,
        
    },
    star: {
        height: 40,
        width: 40,
        marginHorizontal: 8,
    },
    containAddImage: {
        width: 325,
        height: 65,
        borderWidth: 1.2,
        borderRadius: 5,
        top: 85,
        borderColor: 'blue',
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCamera: {
        height: 35,
        width: 42,
        left: 50,
    },
    textAddImage: {
        fontSize: 21,
        fontWeight: 'bold',
        left: 64,
    },
    containShare: {
        borderWidth: 1.2,
        borderColor: "#C4C4C4",
        top:100,
        width: 325,
        borderRadius: 5,
        height:230,
    },
    textShare1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#C4C4C4',
        padding: 15,
    },
    textShare2: {
        top: 115,
        left: 56,
        fontWeight: 'bold',
        fontSize: 14
    },
    btnSendFooter: {
        width: 325,
        top: 125,
        height: 48,
        backgroundColor: '#0D5DB6',
        borderWidth: 1.2,
        borderColor: '#1511EB',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textBtnSend: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

})
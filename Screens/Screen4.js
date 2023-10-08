import {View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native'
export default function App(){
    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <View style = {styles.header1}>
                    <Image style = {styles.imgBook} source={require('../img/book.png')}></Image>
                    <View style = {styles.titlehearder}>
                        <Text style = {styles.textheader1}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style = {styles.textheader2}>Cung cấp bởi Tiki Trading</Text>
                        <Text style = {styles.textheader3}>141.800 đ</Text>
                        <Text style = {styles.textheader4}>141.800 đ</Text>
                        <View style = {styles.soLuong}>
                            <Image style = {styles.imgcong} source={require('../img/btnadd.png')}></Image>
                            <Text style = {styles.textheader5}>1</Text>
                            <Image style = {styles.imgtru} source={require('../img/btnminus.png')}></Image>
                            <Text style = {styles.textheader6}>Mua_sau</Text>
                        </View>
                    </View>
                </View>
                <View style = {styles.header2}>
                    <View style = {styles.subheader1}>
                        <Text style = {styles.textsubheader11}>Mã giảm giá đã lưu</Text>
                        <Text style = {styles.textsubheader12}>Xem tại đây</Text>
                    </View>
                    <View style = {styles.subheader2}>
                        <Text style = {styles.textsubheader21}>Mã giảm giá </Text>
                        <TouchableOpacity style = {styles.btnsubheader1}>
                            <Text style = {styles.textBtnheader}>Áp dụng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style = {styles.content1}>
                <Text style = {styles.textcontent11}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style = {styles.textcontent12}>Nhập tại đây?</Text>
            </View>
            <View style = {styles.content2}>
            <Text style = {styles.textcontent21}>Tạm tính</Text>
                <Text style = {styles.textcontent22}>141.800 đ</Text>
            </View>
            <View style = {styles.footer}>
                <View style = {styles.footer1}>
                    <Text style = {styles.textfooter11}>Thành tiền</Text>
                    <Text style = {styles.textfooter12}>141.800 đ</Text>
                </View>
                <TouchableOpacity style = {styles.btnfooter}>
                    <Text style = {styles.textbtnfooter}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        height: 660,
        width: 390,
        backgroundColor: '#C4C4C4'
    },
    header: {
        display: 'block',
        height: '44.22%',
        width: '100%',
        backgroundColor: 'lightblue',
        
    },
    header1: {
        backgroundColor: 'white',
        height: '50%',
        width: '100%',
        flexDirection: 'row',
    },
    imgBook: {
        height: 140,
        width: 117,
        top: 15,
        left: 15,
    },
    titlehearder: {
        left: 35,
        top: 15,
    },
    textheader1: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 7,
    },
    textheader2: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 7,

    },
    textheader3: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
        marginBottom: 5,
    },
    textheader4: {
        textDecorationLine:'line',
    },
    soLuong: {
        height: '100%',
        width: 20,
        flexDirection: 'row',
    },
    textheader5: {
        left: 15,
        fontWeight: 'bold',
    },
    textheader6: {
        left: 100,
        fontWeight: 'bold',
        color: 'blue'
    },
    imgcong: {
        height: 20,
        width: 20,
        left: 60,
    },
    imgtru: {
        height: 20,
        width: 20,
        left: -25,
    },
    header2: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        flexDirection: 'column',
    },
    subheader1: {
        width: '100%',
        flexDirection: 'row',
    },
    textsubheader11: {
        fontWeight: 'bold',
        left: 15,
        top: 10,
    },
    textsubheader12: {
        fontWeight: 'bold',
        left: 55,
        top: 10,
        color: 'blue',
    },


    subheader2: {
        width: '100%',
        flexDirection: 'row',
    },
    textsubheader21:{
        borderWidth: 1,
        left: 15,
        top: 50,
        width: 200,
        height: 50,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        padding: 6,
    },
    btnsubheader1: {
        backgroundColor: '#0A5EB7',
        height: 50,
        width: 120,
        top: 50,
        left: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnheader: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    },
    content1: {
        width: '100%',
        height: '7.97%',
        backgroundColor: 'white',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textcontent11: {
        fontWeight: 'bold',
        left: 15,
        fontSize: 13,
    },
    textcontent12: {
        fontWeight: 'bold',
        color: 'blue',
        left: 25,
        fontSize: 13,
    },
    content2: {
        width: '100%',
        height: '7.97%',
        backgroundColor: 'white',
        marginTop: '5%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textcontent21: {
        fontWeight: 'bold',
        left: 15,
        fontSize: 23,
    },
    textcontent22: {
        fontWeight: 'bold',
        color: 'red',
        left: 155,
        fontSize: 23,
    },
    footer: {
        width: '100%',
        marginTop: '26.5%',
        height: '18.75%',
        backgroundColor: 'white',
        
    },
    footer1: {
        flexDirection: 'row',
    },
    textfooter11:{
        color: "#808080",
        fontSize: 23,
        fontWeight: 'bold',
        top: 15,
        left: 15,
    },
    textfooter12:{
        fontWeight: 'bold',
        color: 'red',
        left: 155,
        fontSize: 23,
        top: 15
    },

    btnfooter: {
        backgroundColor: '#E53935',
        top: 25,
        height: 50,
        width: 350,
        left: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textbtnfooter:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
    }
    
})
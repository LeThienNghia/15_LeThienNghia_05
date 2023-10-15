import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image style = {styles.imgHeader1} source={require('../img/vs_silver.png')}></Image>
        <Text style = {styles.txtHeader}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style = {styles.contentRate}>
            <Image style = {styles.imgStar11} source={require('../img/star.png')}></Image>
            <Image style = {styles.imgStar11} source={require('../img/star.png')}></Image>
            <Image style = {styles.imgStar11} source={require('../img/star.png')}></Image>
            <Image style = {styles.imgStar11} source={require('../img/star.png')}></Image>
            <Image style = {styles.imgStar11} source={require('../img/star.png')}></Image>
            <Text style = {styles.txtContentRate}>(Xem 828 đánh giá)</Text>
        </View>
        <View style = {styles.contentPrice}>
            <Text style = {styles.txtpriceNew}>1.790.000 đ</Text>
            <Text style = {styles.txtpriceOld}>1.790.000 đ</Text>
        </View>
        <View style = {styles.contentHelp}>
            <Text style = {styles.txtcontenthelp1}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
            <Image style = {styles.imgcontenthelp} source={require('../img/group1.png')}></Image>
        </View>
        <TouchableOpacity style = {styles.btnchonmau} onPress={()=>{  navigation.navigate("silverchonmau");}}>
            <Text style = {styles.txtBtnChonMau1}>4 MÀU-CHỌN MÀU</Text>
            <Image style = {styles.btnVector} source={require('../img/vector.png')}></Image>

        </TouchableOpacity>
        <TouchableOpacity style = {styles.btnMua}>
            <Text style = {styles.txtBtnMua}>CHỌN MUA</Text>
        </TouchableOpacity>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  imgHeader1: {
    width: 300,
    height: 320,
    top: -75,
    resizeMode: 'contain'
  },
  txtHeader: {
    fontSize: 17,
    lineHeight: 17.58,
    top: -65
  },
  contentRate: {
    flexDirection: 'row',
    top: -50,
    alignItems: 'center',
  },
  imgStar11: {
    height: 27,
    width: 26,
    marginHorizontal: 3,
    left: -9,
  },
  txtContentRate: {
    fontSize: 18,
  },
  contentPrice: {
    flexDirection: 'row',
    top: -44,
    alignItems: 'flex-end',
  },
  txtpriceNew: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    left: -55,
  },
  txtpriceOld: {
    color: '#00000094',
    fontWeight: 'bold',
    fontSize: 17,
    left: -13,
  },
  contentHelp: {
    flexDirection: 'row',
    top: -32,
  },
  txtcontenthelp1: {
    color: 'red',
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: "14.06px",
    left: -50,
  },
  imgcontenthelp: {
    height: 21,
    width: 21,
    left: -40,
    top: -3,
  },
  btnchonmau: {
    top: -20,
    borderWidth: 1,
    width: 330,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  txtBtnChonMau1: {
    fontSize: 17,
    lineHeight: '17.58px',
  },
  btnVector: {
    width: 15,
    height: 15,
    left: 60,
  },

  btnMua: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    top: 60,
    width: 330,
    height: 50,
    borderRadius: 10,
  },
  txtBtnMua: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }


});

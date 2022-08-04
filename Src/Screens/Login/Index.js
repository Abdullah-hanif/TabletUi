import { StyleSheet, Text, View,Image, TextInput ,TouchableOpacity} from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Index = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
        <View style={{marginTop:'5%',height:'20%',alignItems:'center'}}>
      <Image source={{uri:'https://images-platform.99static.com//catmpnsSBvdoCodFC29ZD04FOEs=/203x2607:996x3400/fit-in/500x500/99designs-contests-attachments/90/90105/attachment_90105410'}} style={{width:'13%',height:160,borderRadius:360}}/>
      </View>
      <View>
        <Text style={{marginTop:'2%',fontSize:35,fontWeight:'700',alignSelf:'center',color:'white'}}>WELCOME TO LOGIN</Text>
      </View>
      <View style={{height:'100%',alignItems:'center',marginTop:'5%'}}>
        <View style={{borderBottomWidth:2,borderColor:'white',width:'40%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <TextInput placeholder='Email' placeholderTextColor={'white'} style={{fontSize:20,width:'90%'}}/>
         <Fontisto name='email' size={25} color={'white'}/>
        </View>
        <View style={{marginTop:'3%',borderBottomWidth:2,borderColor:'white',width:'40%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
         <TextInput placeholder='Password' placeholderTextColor={'white'} style={{fontSize:20,width:'90%'}}/>
         <Fontisto name='locked' size={25} color={'white'}/>
        </View>
        <TouchableOpacity onPress={()=>(navigation.navigate('home'))} style={{backgroundColor:'#1285fd',marginTop:'5%',width:'35%',height:'7%',justifyContent:'space-evenly',alignItems:'center',borderRadius:25}}>
           <Text style={{color:'white',fontSize:20}}>LOGIN  <FontAwesome name='long-arrow-right' size={25} color={'white'}/></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'3%'}}>
          <Text style={{fontSize:20,color:'white'}}>Forget Password</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'black',
        flex:1
    }
})
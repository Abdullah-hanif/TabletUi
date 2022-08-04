import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
const Index = () => {
  return (
    <View style={{backgroundColor:'black',flex:1,flexDirection:'row'}}>
      {/* Left side */}
      <View style={{backgroundColor:'black',height:'100%',width:'65%'}}>
        {/* Header */}
       <View style={{borderRadius:15,flexDirection:'row',justifyContent:'space-between',marginTop:5,backgroundColor:'#373737'}}>
       <View style={{flexDirection:'row',alignItems:'center',marginLeft:10}}>
       <FontAwesome name='shopping-basket' size={30} color={'blue'}/>
       <TouchableOpacity style={{marginLeft:10,borderWidth:1,borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:'55%',height:50,borderColor:'blue'}}>
        <Text style={{color:'blue',fontSize:20}}>Online BestSeller</Text>
        <Text style={{color:'blue',fontSize:20}}><FontAwesome name='bell' size={20} color={'green'}/> 1</Text>
       <Text style={{color:'blue',fontSize:20}}><FontAwesome name='shopping-basket' size={30} color={'blue'}/> 2</Text>
       </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row',marginLeft:'15%',alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderWidth:1,borderRadius:10,width:'20%',borderColor:'blue',height:50}}>
            <FontAwesome name='search' color={'blue'} size={25}/>
            <TextInput placeholder='Sok' placeholderTextColor={'blue'}  style={{fontSize:20}}/>
        </View>
        <View style={{flexDirection:'row',marginLeft:'5%',justifyContent:'space-around',alignItems:'center',borderWidth:1,borderRadius:10,width:'25%',height:50,borderColor:'blue'}}>
        <AntDesign name='scan1' color={'blue'} size={25}/>
        <Text style={{color:'blue'}}>Scan</Text>
        </View>
       </View>
       </View>
       {/* Header */}
       <View>
       <ScrollView horizontal style={{padding:5}}>
        <View style={{backgroundColor:'black',height:60,width:170,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white', fontSize:20,fontWeight:'600'}}>Start</Text>
        </View>
        <View style={{backgroundColor:'#bfacfd',height:60,marginLeft:10,width:170,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20,fontWeight:'600'}}>Mat</Text>
        </View>
        <View style={{backgroundColor:'#bfacfd',height:60,marginLeft:10,width:170,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20,fontWeight:'600'}}>Smorglas</Text>
        </View>
        <View style={{backgroundColor:'#bfacfd',height:60,marginLeft:10,width:170,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20,fontWeight:'600'}}>Dryck</Text>
        </View>
        <View style={{backgroundColor:'#bfacfd',height:60,marginLeft:10,width:170,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'black', fontSize:20,fontWeight:'600'}}>Kaforbid</Text>
        </View>
       </ScrollView>
      {/* 3ViewContainer first */}
      {/* <View style={{height:'90%',width:'100%',backgroundColor:'yellow'}}> */}
      <View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#bfacfd',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#bfacfd',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#bfacfd',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#75eacf',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#bfacfd',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#bfacfd',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#feb775',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#75eacf',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#adf07c',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#adf07c',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#feb775',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#75eacf',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'18%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       </View>
       {/* 4th row start  */}
       
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'15%'}}>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'15%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
       </View>
       <View style={{marginTop:10,flexDirection:'row'}}>
     
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'22%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'22%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
       <View style={{marginTop:10,flexDirection:'row'}}>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'16%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#95baff',height:80  ,width:'15%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       <View style={{marginTop:10,flexDirection:'row'}}>
     
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'22%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      <View style={{backgroundColor:'#fe9695',height:80  ,width:'22%',paddingLeft:10,marginLeft:10,borderRadius:5}}>
        <Text style={{color:'black',fontSize:18}}>Degens Lunch</Text>
        <Text style={{marginTop:10}}>129 Kr</Text>
      </View>
      
       </View>
       </View>
       </View>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:40,height:'30%'}}>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'15%',height:'25%',flexDirection:'row',borderRadius:10}}>
        <FontAwesome name='dollar' size={25} color={'white'}/>
        <Text style={{color:'white',fontSize:18}}>Vaxeekasa</Text>
       </View>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'12%',height:'25%',flexDirection:'row',borderRadius:10}}>
        <FontAwesome name='user-circle-o' size={25} color={'white'}/>
        <Text style={{color:'white',fontSize:18}}>Kunid</Text>
       </View>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'18%',height:'25%',flexDirection:'row',borderRadius:10}}>
       <Ionicons name='newspaper' size={25} color={'white'}/>
        <Text style={{color:'white',fontSize:18}}>PersonAlliger</Text>
       </View>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'12%',height:'25%',flexDirection:'row',borderRadius:10}}>
        <FontAwesome name='cut' size={25} color={'white'}/>
        <Text style={{color:'white',fontSize:18}}>Rabbat</Text>
       </View>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'10%',height:'25%',flexDirection:'row',borderRadius:10}}>
        <Ionicons name='ios-newspaper-outline' size={20} color={'white'}/>
        <Text style={{color:'white',fontSize:15,marginLeft:10}}>Ta Med Naj</Text>
       </View>
       <View style={{backgroundColor:'#373737',justifyContent:'space-around',alignItems:'center',width:'15%',height:'25%',flexDirection:'row',borderRadius:10}}>
        <Ionicons name='md-arrow-undo-circle-sharp' size={25} color={'white'}/>
        <Text style={{color:'white',fontSize:18}}>Oppen Retur</Text>
       </View>
      </View>
      </View>
      
      {/* Right side pricing card */}
      <View style={{backgroundColor:'black',height:'100%',width:'35%',borderLeftWidth:8,borderColor:'#373737'}}>
     <View style={{backgroundColor:'#373737',marginTop:5,flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderRadius:15}}>
      <AntDesign name='delete' size={30} color={'blue'}/>
      <View style={{flexDirection:'row',justifyContent:'space-around',borderWidth:1,borderColor:'blue',borderRadius:10,width:'25%',height:50,alignItems:'center'}}>
      <FontAwesome name='shopping-basket' color={'blue'} size={25}/>
      <Text style={{fontSize:20,color:'blue'}}>Parkera</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',width:'40%',height:50,alignItems:'center',borderWidth:1,borderRadius:10,borderColor:'blue'}}>
      <Ionicons name='newspaper' size={25} color={'blue'}/>
      <Text style={{fontSize:20,color:'blue'}}>Starta Bonkoga</Text>
      </View>
      <MaterialCommunityIcons name='dots-horizontal-circle-outline' color={'blue'} size={30}/>
    </View>
    {/* Header End */}
    <View style={{backgroundColor:'#000000',flex:1,alignItems:'center'}}>
      <View style={{marginTop:'2%',backgroundColor:'#373737',width:'95%',height:'8%',justifyContent:'center',borderRadius:5}}>
       <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Esspresso Double</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>1 artiklr</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>39,00</Text>
       </View>
      </View>
      <View style={{marginTop:'2%',backgroundColor:'#373737',width:'95%',height:'12%',justifyContent:'center',borderRadius:5}}>
       <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Kaffe</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>2 artiklr</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>54,00</Text>
        
       </View>
     <View  style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderWidth:1,
    marginTop:'2%'
  }}
/>
     <TouchableOpacity style={{alignItems:'center'}}>
      <AntDesign name='down' size={25} color={'blue'}/>
     </TouchableOpacity>
      </View>
      <View style={{marginTop:'2%',backgroundColor:'#373737',width:'95%',height:'8%',justifyContent:'center',borderRadius:5}}>
       <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Daggen Salad</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>1 artiklr</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>115,00</Text>
       </View>
      </View>
      <View style={{marginTop:'2%',backgroundColor:'#373737',width:'95%',height:'8%',justifyContent:'center',borderRadius:5}}>
       <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Dagen Lunch</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>1 artiklr</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>129,00</Text>
       </View>
      </View>
      <View style={{borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2d2c2d',width:'90%',height:'6%',marginTop:'1%'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Rumosa Paron</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>00,00</Text>
      </View>
      <View style={{marginTop:'2%',backgroundColor:'#373737',width:'95%',height:'8%',justifyContent:'center',borderRadius:5}}>
       <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Dagen Lunch</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>1 artiklr</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>129,00</Text>
       </View>
      </View>
      <View style={{borderRadius:5,flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'#2d2c2d',width:'90%',height:'6%',marginTop:'1%'}}>
        <Text style={{color:'white',fontSize:20,paddingLeft:10}}>Rumosa Paron</Text>
        <Text style={{color:'white',fontSize:20,paddingRight:10}}>00,00</Text>
      </View>
      <View style={{backgroundColor:'#000000',height:'100%',width:'100%',marginTop:'5%',borderTopWidth:4,borderColor:'grey'}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20,fontWeight:'700',paddingLeft:10,color:'white'}}>Att betala</Text>
            <Text style={{fontSize:20,color:'white'}}>(6 artkilar):</Text>
          </View>
          <View>
            <Text style={{fontSize:20,fontWeight:'700',paddingRight:10,color:'white'}}>466,00 Kr</Text>
          </View>
        </View>
         <View>
        <View style={{flexDirection:'row',justifyContent:'space-around',height:'20%',marginTop:'3%',width:'100%'}}>
          <TouchableOpacity style={{backgroundColor:'#1285fd',width:'45%',height:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',borderRadius:5}}>
          <FontAwesome name='google-wallet' size={25} color={'white'}/>
           <Text style={{color:'white',fontSize:20}}>Presentork</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#1285fd',width:'45%',height:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',borderRadius:5}}>
          <FontAwesome name='money' size={25} color={'white'}/>
           <Text style={{color:'white',fontSize:20}}>kontant</Text>
          </TouchableOpacity>
        </View>
       <View style={{flexDirection:'row',justifyContent:'space-around',height:'20%',marginTop:'2%',width:'100%'}}>
       <TouchableOpacity style={{backgroundColor:'#1285fd',width:'45%',height:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',borderRadius:5}}>
          <Ionicons name='wallet' size={25} color={'white'}/>
           <Text style={{color:'white',fontSize:20}}>SwidBank</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:'#1285fd',width:'45%',height:'100%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center',borderRadius:5}}>
          <FontAwesome name='google-wallet' size={25} color={'white'}/>
           <Text style={{color:'white',fontSize:20}}>Swish</Text>
          </TouchableOpacity>
       </View>
       <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'2%'}}>
        <Fontisto name='nav-icon-grid' size={30} color={'blue'} style={{marginLeft:"5%"}}/>
        <View style={{marginRight:"5%",borderWidth:1,borderColor:'blue',width:'45%',height:40,borderRadius:5,alignItems:'center',justifyContent:'center'}}>
          <Text style={{color:'blue'}}>A$A safhadufh</Text>
        </View>
       </View>
       </View>
      </View>
    </View>
   
   
      </View>
    </View>
  )
}

export default Index

const styles = StyleSheet.create({})
import { StyleSheet, Text, View , TextInput,TouchableOpacity, Image,ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Attendance = () => {
    //const username = route.params.username
    const navigation = useNavigation
  return (
    <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <View imageContainer>
                        <ImageBackground
                         source={require("../../../assets/images/Recs.png")}
                         style={{ width: 360, height: 50, marginRight: 2, marginTop: 1 }}>
                            
                            <Image
                             source={require("../../../assets/images/Attend.png")}
                             style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop:5 }} />
                         <Text style={{marginLeft:100,marginTop:-34, fontWeight:'bold',fontSize:20, color:'white'}}>ATTENDANCE</Text>
                         
                        </ImageBackground>
                    </View>
    
                    <View imageContainerTwo>
                        <ImageBackground
                         source={require("../../../assets/images/15.png")}
                         style={{ width: 360, height: 30, marginRight: 2, marginTop: -2 }}>
                            
                         <Text style={{marginLeft:15,marginTop:8, fontWeight:'bold',fontSize:12, color:'white'}}>Class : 3 A</Text>
                         <Text style={{marginLeft:250,marginTop:-15, fontWeight:'bold',fontSize:12, color:'white'}}>Date:  12/12/21</Text>
                        </ImageBackground>
                    </View>
    
                    
                    <View style={styles.imageView}>
                    <ImageBackground
                             source={require("../../../assets/images/16.png")}
                             style={{ width: 375, height: 18, marginBottom: 1, marginLeft: 1, marginTop:30 }} >
                            <Text style={{marginLeft:15,marginTop:-1, fontWeight:'bold',fontSize:12, color:'white'}}>Student Name</Text>
                            <Text style={{marginLeft:230,marginTop:-15, fontWeight:'bold',fontSize:12, color:'white'}}>Present</Text>
                            <Text style={{marginLeft:300,marginTop:-15, fontWeight:'bold',fontSize:12, color:'white'}}>Absent</Text>
                             </ImageBackground>
                    </View>
                    <View style={styles.View1}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:12, color:'black'}}>Prajesh Shakya</Text>
                    <Image
                             source={require("../../../assets/images/Checkbox.png")}
                             style={{ width: 18, height: 18, marginBottom: 1, marginLeft: 150, marginTop:10}} />
                     <Image
                             source={require("../../../assets/images/Checkbox.png")}
                             style={{ width: 18, height: 18, marginBottom: 1, marginLeft: 50, marginTop:10 }} />         
                    </View>
                    <View style={styles.View2}>
                    <Text style={{marginLeft:15,marginTop:10,fontSize:12, color:'black'}}>Prajesh Shakya</Text>
                    <Image
                             source={require("../../../assets/images/Checkbox.png")}
                             style={{ width: 18, height: 18, marginBottom: 1, marginLeft: 150, marginTop:10}} />
                     <Image
                             source={require("../../../assets/images/Checkbox.png")}
                             style={{ width: 18, height: 18, marginBottom: 1, marginLeft: 50, marginTop:10 }} />         
                    </View>
                    
                </View>
            </View>
  )
}

export default Attendance

const styles = StyleSheet.create({
    View1:{
        flexDirection:'row',
        alignContent:'space-between',
        borderBottomWidth:1,
    },
    View2:{
        flexDirection:'row',
        alignContent:'space-between',
        borderBottomWidth:1,
    }
})
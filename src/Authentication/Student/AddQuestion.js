import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ImageBackground , Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddQuestion = () => {
    const navigation=useNavigation()
  return (
     <View style={styles.container}>
               <View style={styles.secondContainer}>
                   <View imageContainer>
                       <ImageBackground
                           source={require("../../../assets/images/Recs.png")}
                           style={{ width: 360, height: 50, marginRight: 2, marginTop: 1, }}>
   
                           <Image
                               source={require("../../../assets/images/Exam (2).png")}
                               style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop: 5 }} />
                           <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>ADD QUESTION</Text>
                       </ImageBackground>
                   </View>
                   <View>
                       <Text style={{ marginLeft: 20, marginTop: 50, fontSize: 20, }}>Ask your Question Below</Text>
                   </View>
   
   
   
                   <View style={{marginTop:-1}}>
   
                       <Image
                           source={require("../../../assets/images/container2.png")}
                           style={{ width: 330, height: 293, marginBottom: 1, marginLeft: 15, marginTop: 6 }} />
                       <Pressable>
                           <Text style={{ marginLeft: 20, marginTop: 10, color: 'white', borderRadius: 10, backgroundColor: '#0C46C4', marginRight: 240, fontSize: 11, padding: 10, paddingLeft: 15 }}>Upload File</Text>
                       </Pressable>
                   </View>
                   <View style={styles.Send}>
                    
                       <TouchableOpacity style={styles.button}
                        onPress={()=> navigation.navigate('Answer')}>
                      
                           <Text style={styles.press}>Ask Question</Text>

                       </TouchableOpacity>
                      
                   </View>
               </View>
           </View>
       
  )
}

export default AddQuestion

const styles = StyleSheet.create({
    Send: {
        marginBottom: 20,
        marginTop: 170,
        marginLeft: 70,
        marginRight: 50,


    },
    button: {
        marginRight: -4,
        marginLeft: -30,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        paddingRight: 40,
        paddingLeft: 40,
        backgroundColor: "#0C46C4",

    },
    press: {
        color: 'white',
        marginLeft: 0,
        fontSize: 17,
    },
    lastText: {
        fontSize: 15,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'gray',
        marginLeft: 89,
        marginRight: 80,
    },
})
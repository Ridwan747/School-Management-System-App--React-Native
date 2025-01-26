import { StyleSheet, Text, View ,TextInput,TouchableOpacity,Image,ImageBackground , Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AskQuestion = () => {
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
                                 <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>ASK QUESTION</Text>
                             </ImageBackground>
                         </View>
                         <View>
                             <Text style={{ marginLeft: 130, marginTop: 60, fontSize: 20, }}>Start Quiz</Text>
                         </View>
         
         
         
                         <View style={{marginTop:-1}}>
         
                             <Image
                                 source={require("../../../assets/images/Qua4.png")}
                                 style={{ width: 173, height: 139, marginBottom: 1, marginLeft: 100, marginTop: 50 }} />
                            
                         </View>
                         <View style={styles.Start}>
                          
                             <TouchableOpacity style={styles.button}
                             onPress={()=> navigation.navigate('Next')}>
                            
                                 <Text style={styles.press}>Start</Text>
      
                             </TouchableOpacity>
                            
                         </View>
                     </View>
                 </View>
  )
}

export default AskQuestion

const styles = StyleSheet.create({
    Start: {
        marginBottom: 20,
        marginTop: 50,
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
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Image,ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StudentQuiz = () => {
    const navigation=useNavigation()
  return (
     <View style={styles.container}>
               <View style={styles.secondContainer}>
                   <View style={styles.imageContainer}>
                       <ImageBackground
                           source={require("../../../assets/images/Recs.png")}
                           style={{ width: 360, height: 50, marginRight: 2, marginTop: 1, }}>
   
                           <Image
                               source={require("../../../assets/images/Questions.png")}
                               style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop: 5 }} />
                           <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>QUIZ</Text>
                       </ImageBackground>
                   </View>
                   <View style={{ marginTop: 10 }}>
                       <Text style={{ marginLeft: 40, marginRight: 30, marginTop: 30, fontSize: 40, fontWeight: 'bold', color:'#0C46C4' }}>What is frist king of Nepal?</Text>
                       </View>

                       <View style={styles.imageContainerTwo}>
                       <Pressable
                       onPress={()=>navigation.navigate('Next')}>
                       <ImageBackground
                       
                           source={require("../../../assets/images/Vector (2).png")}
                           style={{ width: 303, height: 50, marginLeft: 30, marginTop: 100, }}>
                        
                         <Pressable
                         onPress={()=>navigation.navigate('NextTwo')}>
                           <Text style={{ marginLeft: 50, marginTop: 10, fontSize: 20, color: 'white' }}>Prithvi Narayan Shah</Text>
                           </Pressable>
                       </ImageBackground>
                       </Pressable>
                   </View>
                   <View style={styles.imageContainerThree}>
                    <Pressable
                    onPress={()=>navigation.navigate('StudentQuizTwo')}>
                       <ImageBackground
                           source={require("../../../assets/images/Vector (2).png")}
                           style={{ width: 303, height: 50, marginLeft: 30, marginTop: 50, }}>
                          
                         
                           <Text style={{ marginLeft: 110, marginTop: 10,  fontSize: 20, color: 'white' }}>Options</Text>
                          
                       </ImageBackground>
                       </Pressable>
                   </View>
                       </View>
                       </View>
  )
}

export default StudentQuiz

const styles = StyleSheet.create({})
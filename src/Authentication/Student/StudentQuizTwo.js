import { StyleSheet, Text, View,TextInput,TouchableOpacity, Image,ImageBackground, Pressable } from 'react-native'
import React from 'react'

const StudentQuizTwo = () => {
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
                       <View style={styles.imageView}>
                                          <ImageBackground
                                              source={require("../../../assets/images/Card.png")}
                                              style={{ width: 320, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                                              <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold', fontSize:20 }}>What is frist king of Nepal?</Text>
                                              <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft:190, marginTop: -60 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 190, marginTop: 10 }} />
                                          </ImageBackground>
                                      </View>

                                      <View style={styles.imageViewTwo}>
                                          <ImageBackground
                                              source={require("../../../assets/images/Card.png")}
                                              style={{ width: 320, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                                              <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold', fontSize:20 }}>What is frist king of Nepal?</Text>
                                              <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft:190, marginTop: -60 }} />
                                                  <Image
                                                  source={require("../../../assets/images/option.png")}
                                                  style={{ width: 113, height: 25, marginBottom: 1, marginLeft: 190, marginTop: 10 }} />
                                          </ImageBackground>
                                      </View>
                      
                                     
                                      
                           </View>
                           </View>
    
  )
}

export default StudentQuizTwo

const styles = StyleSheet.create({})
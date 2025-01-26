import { StyleSheet, Text, View,TextInput, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'

const NextTwo = () => {
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
                       <Text style={{ marginLeft: 150, marginTop: 60, fontSize: 20, }}>Score</Text>
                   </View>
                   <View>
                       <Text style={{ marginLeft: 150, marginTop: 60, fontSize: 20, }}>Score : 4</Text>
                       <Text style={{ marginLeft: 150, marginTop: 10, fontSize: 20, }}>Total : 5</Text>
                   </View>

                   </View>
                   </View>
  )
}

export default NextTwo

const styles = StyleSheet.create({})
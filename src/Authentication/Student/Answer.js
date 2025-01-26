import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image,ImageBackground , Pressable, ScrollView } from 'react-native'
import React from 'react'

const Answer = () => {
  return (
     <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
            >
      {/* <View style={styles.container}> */}
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
                           <Text style={{ marginLeft: 20, marginTop: 50, fontSize: 20,color:'#0C46C4',fontWeight:'bold' }}>Subject</Text>
                       </View>
                       <View>
                           <Text style={{ marginLeft: 20, marginTop: 30, fontSize: 20,color:'black',fontWeight:'bold' }}>Quation #1</Text>
                       </View>
                       <View>
                           <Text style={{ marginLeft: 20, marginTop: 40, fontSize: 15,color:'black',borderBottomWidth:1 }}>The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>
                       </View>
                       <View>
                           <Text style={{ marginLeft: 20, marginTop: 50, fontSize: 15,color:'black', }}>The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? The standard Lorem Ipsum passage.
"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>
                       </View>
       <View style={styles.Send}>
        <TouchableOpacity style={styles.button}>
         <Text style={styles.press}>Download Answer</Text>
       </TouchableOpacity>
        </View>
       </View>
       </ScrollView>
  )
}

export default Answer

const styles = StyleSheet.create({
    Send: {
        marginBottom: 20,
        marginTop: 20,
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
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const StudentExamRoutine = () => {
    const navigation=useNavigation()
  return (
      <View style={styles.container}>
                <View style={styles.secondContainer}>
                    <View style={styles.imageContainer}>
                        <ImageBackground
                            source={require("../../../assets/images/Recs.png")}
                            style={{ width: 360, height: 50, marginRight: 2, marginTop: 1, }}>
    
                            <Image
                                source={require("../../../assets/images/Exam (2).png")}
                                style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop: 5 }} />
                            <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>QUESTION LIST</Text>
    
                        </ImageBackground>
                    </View>
                    <View style={styles.imageView}>
                        <ImageBackground
                            source={require("../../../assets/images/Card.png")}
                            style={{ width: 311, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                            <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold', fontSize:20}}>Question</Text>
                            <Text style={{ marginLeft: 20, marginTop: 20,  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?

                            </Text>
                            <Pressable>
                                <Text style={{ marginLeft: 250, marginTop: 20, color: '#0C46C4', }}>VIEW</Text>
                            </Pressable>
                        </ImageBackground>
                    </View>

                    <View style={styles.imageViewTwo}>
                        <ImageBackground
                            source={require("../../../assets/images/Card.png")}
                            style={{ width: 311, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                            <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold', fontSize:20}}>Question</Text>
                            <Text style={{ marginLeft: 20, marginTop: 20,  }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?

                            </Text>
                            <Pressable>
                                <Text style={{ marginLeft: 250, marginTop: 20, color: '#0C46C4', }}>VIEW</Text>
                            </Pressable>
                        </ImageBackground>
                    </View>

                    <View style={{marginTop:50}}>
                        
                      <Pressable>
                                <Text style={{ marginLeft: 200,marginRight:10,paddingLeft:20, marginTop: 20, borderWidth:2, borderRadius:10,borderColor:'skyblue' }}>Remove Question</Text>
                            </Pressable>
                     <Pressable
                     onPress={()=>navigation.navigate('AddQuestion')}>
                                <Text style={{ marginLeft: 200,marginRight:10,paddingLeft:30, marginTop: 20, borderWidth:2, borderRadius:10,borderColor:'skyblue' }}>Add Question</Text>
                            </Pressable>
                    </View>
                    <Pressable
                     onPress={()=>navigation.navigate('AskQuestion')}>
                     <Image
                       source={require("../../../assets/images/Button.png")}
                     style={{ width: 60, height: 60, marginBottom: 1, marginLeft: 260, marginTop: 30 }} />
                     </Pressable>
                </View>
            </View>
  )
}

export default StudentExamRoutine

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, ImageBackground, Image,Pressable } from 'react-native'
import React from 'react'

const StudentAttendance = () => {
  return (
     <View style={styles.container}>
                <View style={styles.secondContainer}>
                   
                    <View style={styles.imageView}>
                        <ImageBackground
                            source={require("../../../assets/images/Card.png")}
                            style={{ width: 288, height: 256, marginBottom: 1, marginLeft: 35, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                            <Text style={{ marginLeft: 20, marginTop: 20,  }}>Class</Text>
                            <Image
                                source={require("../../../assets/images/9.png")}
                                style={{ width: 240, height: 22, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                            <Image
                                source={require("../../../assets/images/Pol.png")}
                                style={{ width: 12, height: 12, marginBottom: 1, marginLeft: 230, marginTop: -15 }} />
                          
                            <Text style={{ marginLeft: 20, marginTop: 20,  }}>Section</Text>
                            <Image
                                source={require("../../../assets/images/9.png")}
                                style={{ width: 240, height: 22, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                            <Image
                                source={require("../../../assets/images/Pol.png")}
                                style={{ width: 12, height: 12, marginBottom: 1, marginLeft: 230, marginTop: -15 }} />
                           
                           <Text style={{ marginLeft: 20, marginTop: 20,  }}>Subject</Text>
                            <Image
                                source={require("../../../assets/images/9.png")}
                                style={{ width: 240, height: 22, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                            <Image
                                source={require("../../../assets/images/Pol.png")}
                                style={{ width: 12, height: 12, marginBottom: 1, marginLeft: 230, marginTop: -15 }} />
                           
                        </ImageBackground>
                    </View>
                    </View>
                    </View>
  )
}

export default StudentAttendance

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TeacherLogin = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
          
                <View style={styles.firstImageContainer}>
                    <ImageBackground
                        source={require("../../../assets/images/images.png")}
                        style={{ width: 360, height: 190, marginRight: -2, marginTop:-70 }}>
                        <Image
                            source={require("../../../assets/images/vec.png")}
                            style={{ width: 150, height: 150, marginBottom: 1, marginTop: 100, marginLeft: 110 }} />
                        <Image
                            source={require("../../../assets/images/happy2.png")}
                            style={{ width: 100, height: 120, marginTop: -135, borderRadius: 20, backgroundColor: 'white', marginLeft: 135 }} />
                    </ImageBackground>
                </View>

                <View style={styles.firstTextContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10, marginBottom: 10 }}>Welcome Message </Text>
                        <Image
                            source={require("../../../assets/images/Vec3.png")}
                            style={{ width: 20, height: 15, marginTop:3 }} />
                    </View>

                    <Text style={{ color: 'white', marginRight: 10, marginBottom: 10 }}>The standard Lorem Ipsum passage
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>
                <View style={styles.imageViewOne}>
                <View style={styles.imageContainerOne}>
                    <Pressable
                                    onPress={()=>navigation.navigate('Attendance')}>
                    <Image
                        source={require("../../../assets/images/Attendance.png")}
                        style={{ width: 50, height: 60, marginLeft: 30, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 20, }}>Attendance</Text>
                </View>

                <View style={styles.imageContainerTwo}>
                <Pressable
                    onPress={()=>navigation.navigate('TeachersHomeWork')}>
                    <Image
                        source={require("../../../assets/images/Homework.png")}
                        style={{ width: 50, height: 60, marginLeft: 30, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 20, }}>Homework</Text>
                </View>

                <View style={styles.imageContainerThree}>
                <Pressable
                    onPress={()=>navigation.navigate('TeachersResult')}>
                    <Image
                        source={require("../../../assets/images/Exam.png")}
                        style={{ width: 50, height: 60, marginLeft: 30, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 35, }}>Result</Text>
                  

                    <View style={styles.imageViewTwo}>
                <View style={styles.imageContainerFour}>
                    <Image
                        source={require("../../../assets/images/Todo List.png")}
                        style={{ width: 50, height: 60, marginLeft: 40, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                    <Text style={{ color: '', marginLeft: 20, }}>Exam Routine</Text>
                </View>

                <View style={styles.imageContainerFive}>
                    <Pressable
                    onPress={()=>navigation.navigate('TeachersSolution')}>
                    <Image
                        source={require("../../../assets/images/Idea.png")}
                        style={{ width: 57, height: 60, marginLeft: 50, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 52, }}>Solution</Text>
                </View>

                <View style={styles.imageContainerSix}>
                    <Pressable 
                    onPress={()=>navigation.navigate('NoticeAndEvents')}>
                    <Image
                        source={require("../../../assets/images/Que.png")}
                        style={{ width: 50, height: 60, marginLeft: 55, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 30, }}>Notice & Event</Text>
                </View>
              </View>
              <View style={styles.imageViewThree}>
              <View style={styles.imageContainerSeven}>
              <Pressable 
                    onPress={()=>navigation.navigate('Registration')}>
                    <Image
                        source={require("../../../assets/images/Add.png")}
                        style={{ width: 60, height: 60, marginLeft: 45, marginTop:30, borderRadius:10, backgroundColor:'#e3f6e6',  }} />
                        </Pressable>
                    <Text style={{ color: '', marginLeft: 35, }}>Add Account</Text>
                </View>
              </View>
                </View>

              

               
            </View>
        </View>
    )
}

export default TeacherLogin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    firstTextContainer: {
        borderWidth: 1,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 20,
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 1,
        paddingRight: 10,
        backgroundColor: 'blue',
        marginTop:75
    },
    imageViewOne:{
        flexDirection: 'row',
        marginLeft: -1,
        marginTop: 1,
        justifyContent:'space-evenly',
    },

    imageViewTwo:{
    flexDirection: 'row',
        marginLeft: -240,
        marginTop: 1,

    },
    imageViewThree:{
        flexDirection: 'row',
            marginLeft: -260,
            marginTop: 10,
    
        },
   
})
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TeachersResult = () => {
    const navigation = useNavigation()
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
                        <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>RESULT</Text>

                    </ImageBackground>
                </View>
                <View style={styles.imageView}>
                    <ImageBackground
                        source={require("../../../assets/images/Card.png")}
                        style={{ width: 311, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold' }}>First Terminal</Text>
                        <Image
                            source={require("../../../assets/images/Rect.png")}
                            style={{ width: 280, height: 60, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                        <Pressable
                        onPress={()=>navigation.navigate('AddMarks')}>
                            <Text style={{ marginLeft: 230, marginTop: 20, color: '#0C46C4', }}>PUBLISH</Text>
                        </Pressable>
                    </ImageBackground>
                </View>

                <View style={styles.imageView}>
                    <ImageBackground
                        source={require("../../../assets/images/Card.png")}
                        style={{ width: 311, height: 166, marginBottom: 1, marginLeft: 25, marginTop: 30, borderRadius: 1, elevation: 1, }} >
                        <Text style={{ marginLeft: 20, marginTop: 20, color: '#0C46C4', fontWeight: 'bold' }}>Second Terminal</Text>
                        <Image
                            source={require("../../../assets/images/Rect.png")}
                            style={{ width: 280, height: 60, marginBottom: 1, marginLeft: 15, marginTop: 10 }} />
                        <Pressable
                        onPress={()=>navigation.navigate('AddMarks')}>
                            <Text style={{ marginLeft: 230, marginTop: 20, color: '#0C46C4', }}>PUBLISH</Text>
                        </Pressable>
                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default TeachersResult

const styles = StyleSheet.create({})
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TeachersSolution = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <View imageContainer>
                    <ImageBackground
                        source={require("../../../assets/images/Recs.png")}
                        style={{ width: 360, height: 50, marginRight: 2, marginTop: 1, }}>

                        <Image
                            source={require("../../../assets/images/Idea3.png")}
                            style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop: 5 }} />
                        <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>SOLUTION</Text>
                    </ImageBackground>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 15, fontSize: 20, fontWeight: 'bold' }}>Question #1</Text>

                    <View>
                        <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 10, fontSize: 16 }}>The standard Lorem Ipsum passage.
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? </Text>
                    </View>
                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: 20, fontSize: 20, }}>Enter Details</Text>
                </View>



                <View style={styles.imageView}>

                    <Image
                        source={require("../../../assets/images/container2.png")}
                        style={{ width: 330, height: 293, marginBottom: 1, marginLeft: 15, marginTop: 6 }} />
                    <Pressable>
                        <Text style={{ marginLeft: 20, marginTop: 10, color: 'white', borderRadius: 10, backgroundColor: '#0C46C4', marginRight: 240, fontSize: 11, padding: 10, paddingLeft: 15 }}>Upload File</Text>
                    </Pressable>
                </View>
                <View style={styles.Send}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.press}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default TeachersSolution

const styles = StyleSheet.create({
    Send: {
        marginBottom: 20,
        marginTop: 80,
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
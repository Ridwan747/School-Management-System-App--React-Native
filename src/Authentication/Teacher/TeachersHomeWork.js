import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, Pressable, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const TeachersHomeWork = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <View imageContainer>
                    <ImageBackground
                        source={require("../../../assets/images/Recs.png")}
                        style={{ width: 360, height: 50, marginRight: 2, marginTop: 1 }}>

                        <Image
                            source={require("../../../assets/images/Home.png")}
                            style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop: 5 }} />
                        <Text style={{ marginLeft: 100, marginTop: -34, fontWeight: 'bold', fontSize: 20, color: 'white' }}>HOMEWORK</Text>

                    </ImageBackground>
                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginRight: 20, marginTop: 50, fontSize: 10 }}>The standard Lorem Ipsum passage
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: 30, fontSize: 15, fontWeight: 'bold', color: '#0C46C4' }}>Subject</Text>
                </View>
                <View>
                    <Text style={{ marginLeft: 20, marginTop: 30, fontSize: 15, }}>Add homework</Text>
                </View>

                <View style={styles.imageView}>
                    <Image
                        source={require("../../../assets/images/container.png")}
                        style={{ width: 330, height: 55, marginBottom: 1, marginLeft: 15, marginTop: -1 }} />
                </View>
                <View style={styles.Submit}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.press}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ marginLeft: 80, marginTop: 30, fontSize: 15, color: '#0C46C4' }}>File is uploaded sucessfully</Text>
                </View>
                <View style={styles.imageView}>
                    <ImageBackground
                        source={require("../../../assets/images/Vector (1).png")}
                        style={{ width: 375, height: 51, marginBottom: 1, marginLeft: 1, marginTop: 210 }} >
                        <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold', fontSize: 15, color: 'white' }}>Subject</Text>
                        <Text style={{ marginLeft: 290, marginTop: -16, fontWeight: 'bold', fontSize: 15, color: 'white' }}>Subject</Text>

                    </ImageBackground>
                </View>
            </View>
        </View>
    )
}

export default TeachersHomeWork

const styles = StyleSheet.create({
    Submit: {
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 60,
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
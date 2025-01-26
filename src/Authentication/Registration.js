import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Registration = () => {
    const navigation = useNavigation()
    return (
        <ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >


            <View style={styles.ImageContainer}>
                <ImageBackground
                    source={require("../../assets/images/images.png")}
                    style={{ width: 360, height: 190, marginRight: -2, marginTop: -70 }}>
                    <Image
                        source={require("../../assets/images/vec.png")}
                        style={{ width: 120, height: 120, marginBottom: 1, marginTop: 100, marginLeft: 120 }} />
                    <Image
                        source={require("../../assets/images/Union.png")}
                        style={{ width: 50, height: 50, marginTop: -90, borderRadius: 20, marginLeft: 155 }} />
                    <Text style={{ fontSize: 15, marginTop: -0, color: '#28C2A0', marginLeft: 145 }}>Add Photo</Text>
                </ImageBackground>
            </View>


            <View style={styles.registrationView}>
                <Text style={styles.Name}>Full Name</Text>
                <TextInput style={styles.name}
                    placeholder='Enter Something...' />
                <Text style={styles.Email}>Email</Text>
                <TextInput style={styles.email} placeholder="Enter Something..." />
                <Text style={styles.Class}>Class</Text>
                <TextInput style={styles.class}
                    placeholder="Enter Something..." />
                <Text style={styles.Section}>Section</Text>
                <TextInput style={styles.section}
                    placeholder="Enter Something..." />
                <Text style={styles.Roll}>Roll No.</Text>
                <TextInput style={styles.class}
                    placeholder="Enter Something..." />
            </View>
            <View style={styles.login}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.press}>Add to contact</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.foot}>
                <Text style={styles.newText}>Already have an account?</Text>
                <Pressable
                onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Sign In</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Registration

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    ImageContainer: {
        marginLeft: -24
    },
    Name: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 20
    },
    name: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 1,
        //paddingHorizontal: 10,
        //paddingRight: 130,
        paddingLeft: 9,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 15,
    },
    Email: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 20
    },
    email: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 1,
        paddingHorizontal: 20,
        paddingRight: 130,
        paddingLeft: 9,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 15,
    },
    Class: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 20
    },
    class: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 1,
        paddingHorizontal: 20,
        paddingRight: 130,
        paddingLeft: 9,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 15,
    },
    Section: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 20
    },
    section: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 1,
        paddingHorizontal: 20,
        paddingRight: 130,
        paddingLeft: 9,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 15,
    },
    Roll: {
        fontSize: 15,
        marginBottom: 10,
        marginLeft: 20
    },
    roll: {
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 1,
        paddingHorizontal: 20,
        paddingRight: 130,
        paddingLeft: 9,
        marginLeft: 20,
        marginRight: 30,
        marginBottom: 15,
    },
    registrationView: {
        marginTop: 50,
        marginLeft: -15

    },
    login: {
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,


    },
    button: {
        marginRight: -4,
        marginLeft: -30,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 10,
        paddingRight: 80,
        paddingLeft: 80,
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

    foot: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 60,
        marginRight: 15,
    },

    loginText: {
        marginLeft: 10,
        color: '#0C46C4',
        fontWeight: 'bold',
        marginTop: 1
    },
    newText: {
        marginTop: 0
    },
})
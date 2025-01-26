import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ChooseYourOption = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.firstImageContainer}>
                <ImageBackground
                    source={require("../assets/images/images.png")}
                    style={{ width: 360, height: 190, marginRight: -2, marginBottom: 100 }}>
                    <Image
                        source={require("../assets/images/vec.png")}
                        style={{ width: 150, height: 150, marginBottom: 1, marginTop: 100, marginLeft: 110 }} />
                    <Image
                        source={require("../assets/images/image.png")}
                        style={{ width: 100, height: 120, marginTop: -135, borderRadius: 20, backgroundColor: 'white', marginLeft: 135 }} />
                </ImageBackground>
            </View>
            <View style={styles.firstTextView}>
                <Text style={styles.Text}>Choose your option</Text>
            </View>

            <View style={styles.secondImageContainer}>
           
                <ImageBackground
                    source={require("../assets/images/Rec.png")}
                    style={{ width: 100, height: 100, marginRight: 200, marginBottom: -500 }}>
                        <Pressable
                        onPress={()=>navigation.navigate('Login',{username:'student'})}>
                    <Image
                        source={require("../assets/images/Male.png")}
                        style={{ width: 60, height: 50, marginBottom: 1, marginTop: 25, marginLeft: 20 }} />
                    <Text style={styles.textOne}>Student</Text>
                    </Pressable>
                </ImageBackground>
                

            </View>

            <View style={styles.thirdImageContainer}>
            
                <ImageBackground
                    source={require("../assets/images/Rec.png")}
                    style={{ width: 100, height: 100, marginLeft: 200, marginBottom: 150 }}>
                     <Pressable
            onPress={()=>navigation.navigate('Login',{username:'teacher'})}>
                    <Image
                        source={require("../assets/images/Tuition.png")}
                        style={{ width: 60, height: 50, marginBottom: 1, marginTop: 25, marginLeft: 20 }} />
                         </Pressable>
                </ImageBackground>
                <Text style={styles.textTwo}>Teacher</Text>
                        
            </View>
            <View style={styles.forthImageContainer}>
                <ImageBackground
                    source={require("../assets/images/Rec.png")}
                    style={{ width: 100, height: 100, marginLeft: 1, marginBottom: 150 }}>
                    <Image
                        source={require("../assets/images/Person.png")}
                        style={{ width: 60, height: 50, marginBottom: 1, marginTop: 25, marginLeft: 20 }} />
                    <Text style={styles.textThree}>Guest</Text>
                </ImageBackground>

            </View>
        </View>
    )
}

export default ChooseYourOption

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    firstTextView: {
        marginBottom: 100
    },
    Text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#0C46C4'

    },
    textOne: {
        fontSize: 15,
        marginTop: 25,
        marginLeft: 25
    },
    textTwo: {
        fontSize: 15,
        marginTop: -150,
        marginLeft: 225
    },
    textThree: {
        fontSize: 15,
        marginTop: 25,
        marginLeft: 30
    },

})
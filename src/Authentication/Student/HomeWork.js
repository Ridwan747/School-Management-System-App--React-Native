import { ImageBackground, StyleSheet, Text, View, Image, ImageBackgroundBase, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeWork = () => {
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
                     style={{ width: 35, height: 40, marginBottom: 1, marginLeft: 30, marginTop:5 }} />
                 <Text style={{marginLeft:100,marginTop:-34, fontWeight:'bold',fontSize:20, color:'white'}}>HOMEWORK</Text>
                 
                </ImageBackground>
            </View>
            <View>
            <Text style={{marginLeft:50, marginTop:50}}>Math_2078/4/8 homework file name</Text>
            </View>
            <View style={styles.imageView}>
            <Image
                     source={require("../../../assets/images/Rect.png")}
                     style={{ width: 324, height: 143, marginBottom: 1, marginLeft: 15, marginTop:10 }} />
            </View>
             <View style={styles.Download}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.press}>Download your homework</Text>
                            </TouchableOpacity>
                        </View>
        </View>
    </View>
  )
}

export default HomeWork

const styles = StyleSheet.create({
    Download: {
        marginBottom: 20,
        marginTop: 30,
        marginLeft: 40,
        marginRight: 30,


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
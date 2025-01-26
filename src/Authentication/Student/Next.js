import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Next = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
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
                    <Text style={{ marginLeft: 35, marginTop: 60, fontSize: 20, }}>This Is Quiz RNadom  Question?</Text>
                </View>
                <View>
                    <Pressable
                                        onPress={()=>navigation.navigate('StudentQuiz')}>
                    <Image
                        source={require("../../../assets/images/Btn small.png")}
                        style={{ width: 285, height: 49, marginBottom: 1, marginLeft: 35, marginTop: 50 }} />
                         </Pressable>
                </View>
               
                <View>
                    <Image
                        source={require("../../../assets/images/Btn small.png")}
                        style={{ width: 285, height: 49, marginBottom: 1, marginLeft: 35, marginTop: 50 }} />
                </View>

            </View>
        </View>
    )
}

export default Next

const styles = StyleSheet.create({})
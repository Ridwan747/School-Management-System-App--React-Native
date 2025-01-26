import { Image, ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const Wellcome = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.firstImageView}>
        <Image
          source={require("../assets/images/Vector.png")}
          style={{ width: 170, height: 80, marginRight: 200, marginBottom: 100 }} />
      </View>
      <View style={styles.secondImageView}>
        <Image
          source={require("../assets/images/image.png")}
          style={{ width: 200, height: 250, marginBottom: 100, }} />
         
      </View>
      <View style={styles.login}>
              <TouchableOpacity style={styles.button}
              onPress={()=>navigation.navigate('choose')}>
                <Text style={styles.press}>Continue</Text>
              </TouchableOpacity>
              </View>

      <View style={styles.thirdImageView}>
        <ImageBackground
          source={require("../assets/images/Vectors.png")}
          style={{ width: 350, height: 100, marginBottom: 1, }}>
          <Text style={styles.Text}>Powered by:XYZ COM</Text>
        </ImageBackground>

      </View>

    </View>
  )
}

export default Wellcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

  Text: {
    marginTop: 30,
    marginLeft: 100,
    color: 'white',

  },
  login: {
    marginBottom: 100,
  },
  button: {
    marginRight: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: "#0C46C4",

  },
  press: {
    color: 'white',
    marginLeft: 0,
    fontSize: 20,
  },
})
import { StyleSheet, Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Login = ({route}) => {

  const username = route.params.username

  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.firstImageContainer}>
        <ImageBackground
          source={require("../../assets/images/images.png")}
          style={{ width: 360, height: 190, marginRight: -2, marginBottom: 160 }}>
          <Image
            source={require("../../assets/images/vec.png")}
            style={{ width: 150, height: 150, marginBottom: 1, marginTop: 100, marginLeft: 110 }} />
          <Image
            source={require("../../assets/images/image.png")}
            style={{ width: 100, height: 120, marginTop: -135, borderRadius: 20, backgroundColor: 'white', marginLeft: 135 }} />
        </ImageBackground>
      </View>
      <View style={styles.Log}>
        <Image
          source={require("../../assets/images/2.png")}
          style={{ width: 20, height: 20, marginLeft: 250, marginBottom: -50 }} />
        <Text style={styles.userName}>Username</Text>
       
        <TextInput style={styles.Name} placeholder="PRAJESH SHAKYA" />
        <Image
          source={require("../../assets/images/1.png")}
          style={{ width: 20, height: 20, marginLeft: 250, marginBottom: -40 }} />
        <Text style={styles.P}>password</Text>

        <TextInput
          style={styles.password}
          placeholder="***********************"
          secureTextEntry={true}
        />
     
      </View>
      
      <View style={styles.login}>
      <Pressable>
      
        <TouchableOpacity style={styles.button}
         onPress={()=> username === 'student'? navigation.navigate('StudentLogin'): navigation.navigate('TeacherLogin')}>
          <Text style={styles.press}>Login</Text>
        </TouchableOpacity>
        </Pressable>
        <Pressable>
          <Text style={styles.lastText}>Forget Password</Text>
        </Pressable>
        <View style={styles.foot}>
        <Text style={styles.newText}>Don't have an account?</Text>
        <Pressable
        onPress={()=> navigation.navigate('Registration')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </Pressable>
      </View>
      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  userName: {
    fontSize: 15,
    marginBottom: -1,
    marginLeft: 30,
  },
  Name: {

    borderColor: "gray",
    paddingRight: 130,
    paddingLeft: 9,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 70,
    borderBottomWidth: 3
  },
  P: {
    fontSize: 15,
    marginBottom: -10,
    marginLeft: 30,
  },
  password: {
    borderBottomWidth: 3,
    borderColor: "gray",
    paddingRight: 130,
    paddingLeft: 9,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 150,
  },
  login: {
    marginBottom: 100,
  },
  button: {
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    paddingRight: 100,
    paddingLeft: 100,
    backgroundColor: "#0C46C4",

  },
  press: {
    color: 'white',
    marginLeft: 0,
    fontSize: 20,
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
    marginBottom: 25,
    marginRight: 15,
  },

  loginText: {
    marginLeft: 10,
    color: '#0C46C4',
    fontWeight: 'bold',
    marginTop:10
  },
  newText: {
    marginTop:10
  }

})
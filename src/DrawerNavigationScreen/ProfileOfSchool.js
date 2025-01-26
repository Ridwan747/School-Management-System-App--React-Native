import { StyleSheet, Text, View , TouchableOpacity, TextInput, Image, Pressable, ImageBackground} from 'react-native'
import React from 'react'

const ProfileOfSchool = () => {
  return (
     <View style={styles.container}> 
     <View style={styles.secondContainer}>

              
                    <View style={styles.firstImageContainer}>
                        <ImageBackground
                            source={require("../../assets/images/images.png")}
                            style={{ width: 360, height: 190, marginRight: -2, marginTop:-70 }}>
                            <Image
                                source={require("../../assets/images/vec.png")}
                                style={{ width: 145, height: 145, marginBottom: 1, marginTop: 100, marginLeft: 110 }} />
                            <Image
                                source={require("../../assets/images/30.png")}
                                style={{ width: 109, height: 109, marginTop: -126,left:-7, borderRadius: 20, backgroundColor: 'white', marginLeft: 135 }} />
                        </ImageBackground>
                    </View>
                    <View>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 20, fontWeight:'bold', color: '#0C46C4' }}>ID: 165653</Text>
                     
                    </View>
                    <View style={{marginTop:-30}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Full Name:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>Prajesh Shakya</Text>
                    </View>
                    <View style={{marginTop:-40}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Grade:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>9'B'</Text>
                    </View>
                    <View style={{marginTop:-40}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Roll No:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>21</Text>
                    </View>
                    <View style={{marginTop:-40}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Address:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>No5 Bogobiri</Text>
                    </View>
                    <View style={{marginTop:-40}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Guardian's Name:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>Prajesh Shakya</Text>
                    </View>
                    <View style={{marginTop:-40}}>
                      <Text style={{ marginLeft: 20, marginTop: 55,  fontSize: 15,  color: '#0C46C4' }}>Guardian's Contact:</Text>
                      <Text style={{ marginLeft: 20, marginTop: 5,  fontSize: 15,  }}>08164089959</Text>
                    </View>
                     <View style={styles.Send}>
                                <TouchableOpacity style={styles.button}>
                                  <Text style={styles.press}>Request Edit</Text>
                    </TouchableOpacity>
                                          
                      </View>
                    </View>
                    </View>
    
  )
}

export default ProfileOfSchool

const styles = StyleSheet.create({
  Send: {
    marginBottom: 20,
    marginTop: 70,
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

})
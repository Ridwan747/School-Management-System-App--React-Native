import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileOfPublication from './DrawerNavigationScreen/ProfileOfPublication';
import ProfileOfSchool from './DrawerNavigationScreen/ProfileOfSchool';
import StudentLogin from './Authentication/Student/StudentLogin';
import TeacherLogin from './Authentication/Teacher/TeacherLogin';



const DrawerNavigation = () => {

    
const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator initialRouteName="Home"
   
    screenOptions={{
      drawerLabelStyle:{
        color: 'white',
      },
      drawerStyle:{
        backgroundColor:'#0C46C4'
        
      }
    }}
    >
    <Drawer.Screen name="Home" component={StudentLogin}
    options={{
      headerShown:false,
     drawerIcon:(({})=>(
      <>
      <Image
      source={require('../assets/images/School.png')}
      style={{}}
      />
      </>
     ))
    }}
    />
    {/* <Drawer.Screen name="Notifications"
     options={{
      headerShown:false
    }}
    component={ProfileOfSchool} /> */}
    <Drawer.Screen name="Profile Of School"
     options={{
      headerShown:false,
      drawerIcon:(({})=>(
        <>
        <Image
        source={require('../assets/images/School.png')}
        style={{}}/>
        </>
       ))
    }}
    component={ProfileOfSchool} />

<Drawer.Screen name="Profile Of Publication"
     options={{
      headerShown:false,
      drawerIcon:(({})=>(
        <>
        <Image
        source={require('../assets/images/US.png')}
        style={{}}/>
        </>
       ))
    }}
    component={ProfileOfSchool} />

<Drawer.Screen name="Emergency Contacts"
     options={{
      headerShown:false,
      drawerIcon:(({})=>(
        <>
        <Image
        source={require('../assets/images/Office.png')}
        style={{}}/>
        </>
       ))
    }}
    component={ProfileOfSchool} />

<Drawer.Screen name="Settings"
     options={{
      headerShown:false,
      drawerIcon:(({})=>(
        <>
        <Image
        source={require('../assets/images/Automatic.png')}
        style={{}}/>
        </>
       ))
    }}
    component={ProfileOfSchool} />

<Drawer.Screen name="Logout"
     options={{
      headerShown:false,
      drawerIcon:(({})=>(
        <>
        <Image
        source={require('../assets/images/Exit.png')}
        style={{}}/>
        </>
       ))
    }}
    component={ProfileOfSchool} />
  </Drawer.Navigator>
  )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wellcome from '../SchoolManagementSystem/src/Wellcome'
import ChooseYourOption from '../SchoolManagementSystem/src/ChooseYourOption'
import Login from '../SchoolManagementSystem/src/Authentication/Login'
import DrawerNavigation from '../SchoolManagementSystem/src/DrawerNavigation'

import Registration from '../SchoolManagementSystem/src/Authentication/Registration'
import StudentLogin from './src/Authentication/Student/StudentLogin'
import TeacherLogin from './src/Authentication/Teacher/TeacherLogin'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeWork from './src/Authentication/Student/HomeWork'
import Result from './src/Authentication/Student/Result'
import Attendance from './src/Authentication/Teacher/Attendance'
import TeachersHomeWork from './src/Authentication/Teacher/TeachersHomeWork'
import TeachersResult from './src/Authentication/Teacher/TeachersResult'
import NoticeAndEvents from './src/Authentication/Teacher/NoticeAndEvents'
import TeachersSolution from './src/Authentication/Teacher/TeachersSolution'
import StudentQuiz from './src/Authentication/Student/StudentQuiz'
import StudentQuizTwo from './src/Authentication/Student/StudentQuizTwo'
import StudentExamRoutine from './src/Authentication/Student/StudentExamRoutine'
import AddQuestion from './src/Authentication/Student/AddQuestion'
import Answer from './src/Authentication/Student/Answer'
import AskQuestion from './src/Authentication/Student/AskQuestion'
import Next from './src/Authentication/Student/Next'
import NextTwo from './src/Authentication/Student/NextTwo'
import AddMarks from './src/Authentication/Teacher/AddMarks'
import StudentAttendance from './src/Authentication/Student/StudentAttendance'

const Stack = createNativeStackNavigator();
const App = () => {
  return (

    
    <Stack.Navigator
    initialRouteName="welcome"
    >
    <Stack.Screen 
    options={{
        headerShown:false
    }}
    name="StudentLogin"
     component={DrawerNavigation} />

<Stack.Screen 
    options={{
        headerShown:false
    }}
    name="welcome"
     component={Wellcome} />

    <Stack.Screen 
     options={{
        headerShown:false
    }}
    name="choose" component={ChooseYourOption} />

<Stack.Screen
     options={{
        headerShown:false
    }}
    name='Login' component={Login} />


    <Stack.Screen
     options={{
        headerShown:false
    }}
    name='Registration' component={Registration} />


    <Stack.Screen
     options={{
        headerShown:false
    }}
    name='TeacherLogin' component={TeacherLogin} />

<Stack.Screen
     options={{
        headerShown:false
    }}
    name='HomeWork' component={HomeWork} />

   
    <Stack.Screen
    options={{
       headerShown:false
   }}
   name='Result' component={Result} />

    
<Stack.Screen
    options={{
       headerShown:false
   }}
   name='Attendance' component={Attendance} />

<Stack.Screen
    options={{
       headerShown:false
   }}
   name='TeachersHomeWork' component={TeachersHomeWork} />

<Stack.Screen
    options={{
       headerShown:false
   }}
   name='TeachersResult' component={TeachersResult} />

   <Stack.Screen
   options={{
     headerShown:false
   }}
   name='NoticeAndEvents' component={NoticeAndEvents}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='TeachersSolution' component={TeachersSolution}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='StudentQuiz' component={StudentQuiz}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='StudentQuizTwo' component={StudentQuizTwo}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='StudentExamRoutine' component={StudentExamRoutine}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='AddQuestion' component={AddQuestion}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='Answer' component={Answer}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='AskQuestion' component={AskQuestion}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='Next' component={Next}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='NextTwo' component={NextTwo}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='AddMarks' component={AddMarks}/>

<Stack.Screen
   options={{
     headerShown:false
   }}
   name='StudentAttendance' component={StudentAttendance}/>


   </Stack.Navigator>
    
  )
}
export default App

const styles = StyleSheet.create({})
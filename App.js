import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigators from './Src/Navigation/Index'
import { SafeAreaProvider } from 'react-native-safe-area-context'
const App = () => {
  return (
    <SafeAreaProvider>
      <Navigators/>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})
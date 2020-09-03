import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';


import ItemJournal from './ItemJournal'
import  ApiWeb  from '../API/ApiReportage'

const JournalScreen = ({navigation}) =>{
  return (
      <ApiWeb/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default JournalScreen

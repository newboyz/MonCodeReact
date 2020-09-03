import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import ItemScreen from './ItemScreen'
import  ApiWeb  from '../API/ApiWebTvUac'
import films from '../Helpers/FilmsData'

const HomeScreen = ({navigation}) =>{

    return(
    <ApiWeb/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeScreen

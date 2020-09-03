//ici se trouve le fichier des reportages

import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';

import ItemDetail from './ItemDetail'
import  ApiWeb  from '../API/ApiWebTvUac'
const DetailsScreen = ({navigation}) =>{
  return (
    <ApiWeb/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default DetailsScreen

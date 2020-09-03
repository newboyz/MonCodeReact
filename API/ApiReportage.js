//ici se trouve le fichier qui permet de prendre les informations de l'api pour le fichier reportage/detail

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import ItemDetail from '../Screens/ItemDetail'

export default ApiReportage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.43.107/apiwebtv/public/index.php/api/emissions')
      .then((response) => response.json())
      .then((json) => setData(json['hydra:member']))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator style={{marginTop:150}}/> : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ItemDetail film={item} /> }
        />
      )}
    </View>
  );
};

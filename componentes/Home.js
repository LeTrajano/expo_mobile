import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Home = () => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Text>Letícia</Text>
      <Image source={require('../assets/eu.png')} style={styles.image} />
      <Button
        title="Currículo"
        onPress={() => navigation.navigate('Eu')}
      />
    </View>
  );
};

const styles = StyleSheet.create
(
    {
        container: 
        {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: 
        {
            width: 200,
            height: 200,
            margin: 20,
            borderRadius: 100
        },
    }
);

export default Home;
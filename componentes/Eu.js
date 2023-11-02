import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Eu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Dados Pessoais</Text>
        <Text>Nome: Letícia Trajano Alves</Text>
        <Text>Tel: 81 98655-2810</Text>
        <Text>Email: leticia.alves@edu.pe.senac.br</Text>
        <Text>Github: LeTrajano</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Formação Acadêmica</Text>
        <Text>SENAC - Tecnólogo em Análise e Desenvolvimento de Sistemas</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Formação Complementar</Text>
        <Text>UFPE - Ciencias Farmaceúticas</Text>
        <Text>Lógica de Programação - Curso em vídeo</Text>
        <Text>HTML/CSS/JS básico - Curso em vídeo</Text>
        <Text>Python básico - Curso em vídeo</Text>
        <Text>Java Script - Fundação Bradesco</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Eu;
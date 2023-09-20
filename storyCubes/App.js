import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useState } from "react";

export default function App() {
  const [imagemHistoria, setImagemHistoria] = useState(require('./img/1.png'))
  const [frasesHistoria, setFrasesHistoria] = useState(require('./img/1.png'))



  function sortearHistoria() {

    let sorte = Math.ceil(Math.random() * 20)

    switch (sorte) {
      case 1: setImagemHistoria(require('./img/8.png'))
        setFrasesHistoria('Flecha')
        break;

      case 2: setImagemHistoria(require('./img/7.png'))
        setFrasesHistoria('Machado')
        break;

      case 3: setImagemHistoria(require('./img/6.png'))
        setFrasesHistoria('Livro mágico')
        break;

      case 4: setImagemHistoria(require('./img/5.png'))
        setFrasesHistoria('Arco')
        break;

      case 5: setImagemHistoria(require('./img/4.png'))
        setFrasesHistoria('Baú')
        break;

      case 6: setImagemHistoria(require('./img/2.png'))
        setFrasesHistoria('Moeda')
        break;

      case 7: setImagemHistoria(require('./img/3.png'))
        setFrasesHistoria('Bussola')
        break;

      case 8: setImagemHistoria(require('./img/2.png'))
        setFrasesHistoria('Ouro')
        break;

      case 9: setImagemHistoria(require('./img/20.png'))
        setFrasesHistoria('Prata')
        break;

      case 10: setImagemHistoria(require('./img/19.png'))
        setFrasesHistoria('Chave')
        break;
      case 11: setImagemHistoria(require('./img/18.png'))
        setFrasesHistoria('Picareta')
        break;

      case 12: setImagemHistoria(require('./img/17.png'))
        setFrasesHistoria('Poção de vida')
        break;

      case 13: setImagemHistoria(require('./img/16.png'))
        setFrasesHistoria('Poção de veneno')
        break;

      case 14: setImagemHistoria(require('./img/15.png'))
        setFrasesHistoria('Pergaminho')
        break;

      case 15: setImagemHistoria(require('./img/14.png'))
        setFrasesHistoria('Crânio')
        break;

      case 16: setImagemHistoria(require('./img/13.png'))
        setFrasesHistoria('Galho')
        break;

      case 17: setImagemHistoria(require('./img/12.png'))
        setFrasesHistoria('Runa de vida')
        break;

      case 18: setImagemHistoria(require('./img/11.png'))
        setFrasesHistoria('Runa Mágica')
        break;

      case 19: setImagemHistoria(require('./img/10.png'))
        setFrasesHistoria('Espada')
        break;

      case 20: setImagemHistoria(require('./img/9.png'))
        setFrasesHistoria('Cajado mágico')
        break;
    }

  }


  function resetarHistoria() {

    setImagemHistoria(require('./img/start.png'))
    setFrasesHistoria('')


  }

  return (
    <View style={styles.container}>


      <View style={styles.divImagem}>

        <Image source={imagemHistoria} style={styles.imagem} />

      </View>
      <View style={styles.divFrases}>

        <Text style={styles.frases}>{frasesHistoria}</Text>

      </View>

      <TouchableOpacity style={styles.botao} onPress={sortearHistoria}>
        <Text>Sortear Imagem</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={resetarHistoria}>
        <Text>Recomeçar História</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  texto: {
    color: 'red',
    fontSize: 30
  },

  divImagem:{

    width:100,
    height:170,


  },

  imagem: {
    width: 100,
    height: 100,
    marginBottom: 70,
  },

  botao: {
    width: 150,
    height: 60,
    borderWidth: 3,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 10,

  },

  divFrases: {

    width: '100%',
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


  },

  frases: {

    fontSize: '35pt',
    color: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,




  }


});
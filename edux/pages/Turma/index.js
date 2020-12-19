import React, { useEffect } from 'react';
import { useState } from 'react';
import {View, Text, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import Cabecalho from '../../components/Cabecalho';
import {url} from '../../utils/constants';

const Turma = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

      listarAlunos();

  }, [])

  const listarAlunos = () => {
    fetch(`${url}usuarios`)
        .then(response => response.json())
        .then(data => {
            setUsuarios(data)
            console.log(data);
        })
        .catch(err => console.error(err));
}
    const Item = ({nome}) => {
      return (
          <View style={styles.item}>
              <Text style={styles.nome}>{nome}</Text>
          </View>
          )
    }

    const renderItem = ({ item }) => {
          return(
            <Item nome={item.nome} />
        )
      };

    return(
        <View>
            <Cabecalho />
          <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>TURMA</Text>

            <View style={styles.container1}>
                <View style={styles.card}>
                    <Image
                        style={styles.logo}
                        source={{
                        uri:
                            'https://i1.wp.com/socientifica.com.br/wp-content/uploads/2019/05/image_7150_1e-Hubble-Legacy-Field.jpg?fit=1920%2C1773&ssl=1',
                        }}
                    />
                    <Text style={styles.tituloCard}>2S - 2°DM </Text>
                    <Text style={styles.cursoCard}> Desenvolvimento de Sistemas</Text>
                    <View>
                        <Text style={styles.tituloAlunos}>Alunos</Text>  
                          <FlatList
                            data={usuarios}
                            renderItem={renderItem}
                            keyExtractor={item => item.nome}
                          />
                    </View>          
                </View>
            </View>

            </ScrollView>
        </View>
        

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "#9200D6",
      fontSize: 30,
      fontWeight: "bold",
      fontStyle: "normal",
      textAlign: "center",
      marginTop: "1.5em",
    //   backgroundColor: "#D6D6D6"
    },
    imagemCard: {
        width: '3.5em',
        height: '3.5em',
        borderRadius: '4em',
    },
    margemE: {
        marginLeft: '0.3em',
        marginTop: '0.2em',
    },
    logo: {
        width: '90%',
        height: 100,
        margin: 'auto',
        marginBottom: '1em',
        borderRadius: '2em',
      },
      item : {
        backgroundColor : 'gray',
        borderRadius: '2em',
        display: 'flex',
        padding : 5,
        marginVertical : 8,
        marginHorizontal : 16,
    },
    scrollView: {
      marginHorizontal: 20,
    },
    container1: {
      width: '80%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: 'auto',
      /* backgroundColor: 'gray'; */
    },
    card: {
      width: '100%',
      padding: '0.5em',
      marginTop: '1em',
      marginBottom: '5em',
      borderRadius: '1em',
      border: 'solid 0.1em #9200D6',
      backgroundColor: 'rgb(255, 255, 255)',
      display: 'flex',
      textAlign: 'center',
  },
  tituloCard: {
    fontSize: '1.3em',
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottom: '2px solid black',
    marginBottom: '0.5em',
  },
  tituloAlunos: {
    marginBottom: '0.5em',
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  divAlunos: {
    margin: 'auto',
    marginLeft: '0.5em',
  },
  cursoCard: {
    marginBottom: '0.5em',
    fontSize: '1.2em',
  }
  });

export default Turma;
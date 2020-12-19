import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Cabecalho from '../../components/Cabecalho';

const Home = () => {

    return(
        
        <View>
            <Cabecalho />
            <Text style={styles.text}>RANKING GERAL</Text>
            <View style={styles.container1}>

                <View style={styles.cardRanking}>
                    <View>
                        <Image
                            style={styles.imagemCard}
                            source={{
                            uri:
                                'https://lh3.googleusercontent.com/ogw/ADGmqu8hLGlCrPvhctADQyUHlvLIBN2biYe3EGLyAqwKcg=s83-c-mo',
                            }}
                        />
                    </View>
                    <View>
                        <Text style={styles.text1Card}>
                            Tiago de Castro Valim
                        </Text>
                        <Text style={styles.text2Card}>
                            Dev
                        </Text>
                    </View>
                </View>

                <View style={styles.centro}>
                        <View style={styles.bolaVa}>
                            <Text style={styles.letra}>Bola 1</Text>
                        </View>

                        <View style={styles.flex}>
                            <View style={styles.bolaAm}>
                                <Text style={styles.letra}>Bola 2</Text>
                            </View>

                            <View style={styles.bolaVe}>
                                <Text style={styles.letra}>Bola 3</Text>
                            </View>
                        </View>
                        
                        <View style={styles.bolaAz}>
                            <Text style={styles.letra}>Bola 4</Text>
                        </View>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
    width: '100%',
      flex: 1,
      flexDirection: "column",
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
    container1: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        /* backgroundColor: 'gray'; */
    },
    bolaVa: {
        width: '6em',
        height: '6em',
        borderRadius: '50%',
        display: 'flex',
        backgroundColor: '#FF271C',
    },
    bolaAm: {
        width: '6em',
        height: '6em',
        borderRadius: '50%',
        display: 'flex',
        backgroundColor: '#F9E800',
    },
    bolaAz: {
        width: '6em',
        height: '6em',
        borderRadius: '50%',
        display: 'flex',
        backgroundColor: '#00C2EE',
    },
    bolaVe: {
        width: '6em',
        height: '6em',
        borderRadius: '50%',
        display: 'flex',
        backgroundColor: '#00D65F',
    },
    flex: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    letra:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.5em',
        display: 'flex',
        margin: 'auto',
    },
    centro: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto',
        marginTop: '1em',
        // backgroundColor: 'gray',
    },
    cardRanking: {
        margin: 'auto',
        marginTop: '1em',
        padding: '0.5em',
        width: '100%',
        height: '4em',
        borderRadius: '4em',
        backgroundColor: '#9200D6',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: '1em',
    },
    text1Card: {
        fontSize: '1.2em',
        fontWeight: 'bold',
    },
    text2Card: {
        fontSize: '1.1em',
        fontWeight: 'bold',
    },
    
    

  });

export default Home;
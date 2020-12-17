import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cabecalho from '../../components/Cabecalho';

const Objetivo = () => {
    return(
        <View>
            <Cabecalho />
            <Text style={styles.text}>OBJETIVO</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "#9200D6",
        fontSize: 30,
        fontWeight: "bold",
        fontStyle: "normal",
        textAlign: "center",
        marginTop: "1.5em",
      //   backgroundColor: "#D6D6D6"
      },

});

export default Objetivo;
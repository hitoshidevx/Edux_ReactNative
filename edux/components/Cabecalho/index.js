import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Cabecalho = () => {
    
    const Logout = ({navigation}) =>{
        return(
            <View>
                <TouchableOpacity title="Sair" 
                    onPress={() => {
                        AsyncStorage.removeItem('@jwt');
                        navigation.push('Login');
                    }}
                />
            </View>
        )
    }

    return(
        <View style={styles.cabecalho}>
            <View style={styles.separar}>
                    <Text style={styles.eduxtitulo}>EduX</Text>
                    <TouchableOpacity onPress={Logout}>
                        <FontAwesome5  name={'sign-out-alt'} size={30} color={'#fff'} />
                    </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    cabecalho: {
        padding: '1em',
        backgroundColor: '#9200D6',
    },
    separar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imagemSair: {
        width: '1.8em',
        height: '1.8em',
        marginRight: '1em',
        color: 'fff',
    },
    eduxtitulo: {
        fontStyle: 'normal',
        fontSize: '2em',
        fontWeight: '900',
        color: 'white',
    }
  });

export default Cabecalho;
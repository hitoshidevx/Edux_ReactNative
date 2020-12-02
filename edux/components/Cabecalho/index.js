import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Cabecalho = () => {

    const Logout = ({navigation}) =>{
        return(
            <View>
                <Button title="Sair" onPress={() => {
                    AsyncStorage.removeItem('@jwt');
                    navigation.push('Login');
                  }} />
            </View>
        )
    }


    return(
        <View style={styles.cabecalho}>
            <View style={styles.separar}>
                    <Text style={styles.eduxtitulo}>EduX</Text>
                    <Image
                        style={styles.imagemSair}
                        source={{
                        uri:
                            'https://www.flaticon.com/svg/static/icons/svg/25/25376.svg',
                        }}
                    />
                    <TouchableOpacity onPress={Logout} />
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
    },
    eduxtitulo: {
        fontSize: '2em',
        fontWeight: 'Bold',
        color: 'white',
        marginLeft: '1em',
    }
  });

export default Cabecalho;
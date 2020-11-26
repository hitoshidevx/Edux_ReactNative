import React, { useState } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { url } from '../../utils/constants'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ( {navigation} ) =>{

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const salvar = async (value) => {
        try {
            await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
            // saving error
        }
    }

    const Logar = () => {

        const corpo = {
            email: email,
            senha: senha
        }

        fetch("https://192.168.15.15:5000/api/Login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(corpo)
        })
            .then(response => response.json())
            .then(data => {
                
                if(data.token !== null || data.token !== undefined || data.token !== ''){

                    alert("Seja bem vindo(a)!");
                    console.log(data.token);
                    salvar(data.token);
                    navigation.push('Autenticado');

                }else{
                    alert("Email ou senha inválidos :( ");
                }

            })

    }
    
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
        >
            
                <View style={styles.container}>
                    <Text style={{fontWeight: 1000, fontSize: 80, color: 'white'}}>Edux</Text>
                    <Text style={styles.textoHeader}>LOGIN</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                       
                       
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={text => setSenha(text)}
                        value={senha}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={Logar}
                    >
                        <Text style={styles.textButton}>Entrar</Text>
                    </TouchableOpacity>
                </View>
           
        </KeyboardAvoidingView>
    )

}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textoHeader: {
        color: 'white',
        margin: 10,
        fontWeight: 700,
        marginBottom: 15,
        fontSize: 24
    },
    input: {
        width: 250,
        height: 40,
        color: '#000',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 20,
        padding: 5,
        paddingLeft: 10,
        borderRadius: 10,
        fontWeight: 1000
    },
    button: {
        backgroundColor: 'white',
        width: 250,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButton: {
        fontWeight: 1000,
        color: 'black'
    }

});
import React, { useState } from "react";
import { Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const AuthForm = ( { onSubmit, buttonText, callBack } ) => {    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <>
            <Text style={styles.title}>Email</Text>
            <TextInput 
                style={styles.input} 
                value={email}
                onChangeText={setEmail} 
                autoCapitalize="none" 
                autoCorrect={false} 
            />
            <Text style={styles.title}>Password</Text>
            <TextInput 
                style={styles.input} 
                value={password}
                onChangeText={setPassword} 
                autoCapitalize="none" 
                autoCorrect={false} 
                secureTextEntry 
            />
            <TouchableOpacity onPress={() => onSubmit(email, password, callBack)}>
                <Text style={styles.button}>{buttonText}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E6696E',
        paddingTop: 30,
        paddingBottom: 10
    },
    input: {
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    button: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#E6696E',
        borderRadius: 10,
        padding: 15,
        marginTop: 30

    }
});

export default AuthForm;
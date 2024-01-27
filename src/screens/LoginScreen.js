import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import AuthContext from "../context/AuthContext";

const LoginScreen = ({navigation}) => {
    const { validateLogin } = useContext(AuthContext);
    
    return (
        <View style={styles.view}>
            <Text style={styles.header}>Sign In</Text>
            <Text style={{color: 'gray'}}>Hi there! Nice to see you again.</Text>
            <AuthForm 
                buttonText="Sign In" 
                onSubmit={validateLogin} 
                callBack={() => {navigation.navigate('CustomerList')}} 
            />
            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }} >
                <Text style={styles.register}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

LoginScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    view: {
        padding: 50,
        paddingTop: 180
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    register: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E6696E',
        marginTop: 20
    }
});

export default LoginScreen;
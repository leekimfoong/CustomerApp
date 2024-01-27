import React, {useContext} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm from "../components/AuthForm";
import AuthContext from "../context/AuthContext";

const SignUpScreen = ({navigation}) => {
    const { register } = useContext(AuthContext);
    
    return (
        <View style={styles.view}>
        <Text style={styles.header}>Sign Up</Text>
            <AuthForm 
                buttonText="Continue" 
                onSubmit={register} 
                callBack={() => {navigation.navigate('Login')}} 
            />

            <View style={styles.view2}>
                <Text style={{color: 'gray', verticalAlign: 'middle'}}>Have An Account? </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                    <Text style={styles.login}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

SignUpScreen.navigationOptions = () => {
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
    view2: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'
    },
    login: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#E6696E',
        borderRadius: 10
    }
});

export default SignUpScreen;
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reqresApi from "../api/reqresApi";

const AuthContext = React.createContext();

export const AuthProvider = ( { children } ) => {
    const checkLogin = async ( navigation ) => {
        const token = await AsyncStorage.getItem("token");
        token ? navigation.navigate("CustomerList") : navigation.navigate("Login");
    };

    const checkAccount = async(login, pwd, action, callback) => {
        if (!login || !pwd) {
            alert('Please provide email and password');
        } else {
            try {
                const response = await reqresApi.post('/' + action, {
                    email: login,
                    password: pwd
                });
                if (response.data.token) {
                    try {
                        if(action === 'login') {
                            await AsyncStorage.setItem("token", response.data.token);
                        }
                        if(action === 'register') {
                            alert('Thanks for signing up.');
                        }
                        callback();
                    } catch (err) {
                        console.log(err);
                        alert('Invalid request, please try again!');
                    }
                } else {
                    alert('Invalid request, please try again...');
                }
            } catch(err) {
                console.log(err);
                if (err.response.data.error) {
                    alert(err.response.data.error);
                } else {
                    alert('Invalid request, please try again');
                }
            }
        }
    }

    const validateLogin = async( login, pwd, callback ) => {
        checkAccount(login, pwd, 'login', callback);
    };

    const register = async ( login, pwd, callback ) => {
        checkAccount(login, pwd, 'register', callback);
    };

    const removeLogin = async ( navigation ) => {
        await AsyncStorage.removeItem("token");
        navigation.navigate("Login");
    };
    
    return <AuthContext.Provider value={{ checkLogin, validateLogin, register, removeLogin }}>
        {children}
    </AuthContext.Provider>;
};

export default AuthContext;
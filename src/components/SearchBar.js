import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Feather } from '@expo/vector-icons';

const SearchBar = ( { val, onChange, onSubmit } ) => {
    return (
        <View style={styles.view}>
            <Feather style={styles.icon} name="search" size={24} color="black" />
            <TextInput 
                style={styles.input} 
                placeholder="Search Customers" 
                value={val}
                onChangeText={onChange} 
            />
            <TouchableOpacity onPress={onSubmit} >
                <Text style={styles.button}>Search</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        backgroundColor: `#DDDDDD`,
        height: 40,
        borderRadius: 5,
        margin: 10,
        flexDirection: 'row'
    },
    icon: {
        alignSelf: 'center',
        margin: 5
    },
    input: {
        flex: 1
    },
    button: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        backgroundColor: `#E6696E`,
        borderRadius: 5,
        color: 'white',
        padding: 6

    }
});

export default SearchBar;
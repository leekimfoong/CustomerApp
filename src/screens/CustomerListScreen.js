import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import customerHook from "../hooks/customerHook";
import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";
import AuthContext from "../context/AuthContext";
import ReactPaginate from 'react-paginate';

const CustomerListScreen = ({navigation}) => {
    const [searchText, setSearchText] = useState('');
    const [searchCustomer, result, errMsg] = customerHook();
    const { removeLogin } = useContext(AuthContext);

    return (
        <>
            <View style={styles.view}>
                <Text style={styles.title}>Manage Customers</Text>
                <TouchableOpacity style={{flex: 1}} onPress={() => removeLogin(navigation)} >
                    <Text style={styles.logout}>Logout</Text>
                </TouchableOpacity>
            </View>
            <SearchBar 
                val={searchText} 
                onChange={setSearchText} 
                onSubmit={() => searchCustomer(searchText)}
            />
            <Text>{errMsg == '' ? `` : `${errMsg}`}</Text>
            <SearchResult customerList={result} />
        </>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 2,
        textAlign: 'right'
    },
    logout: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ED703A',
        textAlign: 'center'
    }
});

export default CustomerListScreen;
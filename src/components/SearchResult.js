import React from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const SearchResult = ( { customerList } ) => {

    return(
        <FlatList 
            data={customerList} 
            keyExtractor={item => item.id} 
            renderItem={({item}) => {
                return (
                    <View style={styles.view}>
                        <Image style={styles.img} source={{ uri: item.avatar }} />
                        <View style={styles.content}>
                            <Text style={styles.title}>{item.first_name}, {item.last_name}</Text>
                            <Text>{item.email}</Text>
                        </View>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black'
    },
    content: {
        padding: 20
    },
    title: {
        fontWeight: 'bold'
    }
});

export default SearchResult;
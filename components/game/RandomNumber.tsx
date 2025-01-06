import React from 'react'
import { ThemedText } from '../ThemedText'
import { StyleSheet, TouchableOpacity } from 'react-native'

type RandomNumberProps = {
    number: number;
    isDisabled: boolean;
    selectNumber: (id: number) => void;
    id: number;
}


export function RandomNumber ({ id, number, isDisabled, selectNumber }: RandomNumberProps) {

    const handlePress = ( ) => {
        // if (!isDisabled) {
            selectNumber(id);
        // }
    }
    return (
        <TouchableOpacity onPress={() => console.log(id)} >
            <ThemedText 
                style={[styles.number, isDisabled && styles.disabled ]}
            >{number}</ThemedText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    number: {
        width: 100,
        backgroundColor: '#6c757d',
        textAlign: 'center',
        padding: 20,
        color: '#f8f9fa',
        fontSize: 24,
        marginHorizontal: 15,
        marginVertical: 25,
    },
    disabled: {
        opacity: 0.3,
    }
})

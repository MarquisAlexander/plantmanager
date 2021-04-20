import React from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TouchableOpacityProps, 
    View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

export function Button() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                Confirmar
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    text: {
        fontSize: 14,
        fontFamily: fonts.heading,
        color: colors.white,
    }
})
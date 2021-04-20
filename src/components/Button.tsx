import React from 'react';
import { 
    TouchableOpacity, 
    StyleSheet, 
    Text, 
    TouchableOpacityProps, 
    View } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps ) {
    return (
        <TouchableOpacity 
            style={styles.container}
            {...rest}
        >
            <Text style={styles.text}>
                {title}
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
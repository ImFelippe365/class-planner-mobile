import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';
import theme from './../../styles/theme';

const Button = ({ name, type, style, loading = false, ...props }) => {
    return (
        <TouchableOpacity disabled={loading} style={[styles.buttonContainer, style, loading && styles.buttonDisabled]} {...props}>
            {
                loading ?
                    <ActivityIndicator color={theme.colors.white} />
                    : <Text style={styles.buttonText}>{name}</Text>
            }
        </TouchableOpacity>
    );
}

export default Button;
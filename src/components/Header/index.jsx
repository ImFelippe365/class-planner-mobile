import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ChevronLeft } from 'react-native-feather';
import theme from '../../styles/theme';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Header = ({ backButton = false }) => {

    const { goBack } = useNavigation();
    
    return (
        <View style={styles.container}>
            {
                backButton &&
                <TouchableOpacity onPress={goBack} style={styles.backButton}>
                    <ChevronLeft width={24} height={24} color={theme.colors.black} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header;
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import theme from './../../styles/theme';

const HorizontalLine = ({ style }) => {
    return <View
        style={[style, {
            width: '100%',
            height: 1,
            backgroundColor: theme.colors.lightgray
        }]}
    />;
}

const VerticalLine = ({ style }) => {
    return <View
        style={[style, {
            width: 1,
            height: '100%',
            backgroundColor: theme.colors.lightgray,
            transform: [{
                rotateZ: '180deg'
            }]
        }]}
    />;
}

export { HorizontalLine, VerticalLine };
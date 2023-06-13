import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { Edit, Edit2, FileText, LogOut, Shield, User } from 'react-native-feather';
import { useAuth } from '../../hooks/AuthContext';
import theme from '../../styles/theme';
import styles from './styles';

const Profile = () => {

    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <View style={styles.userImageContainer}>
                <TouchableOpacity style={{ position: 'relative' }} onPress={pickImage}>
                    {
                        user.picture ?
                            <Image source={{ uri: user.picture }} style={styles.userImage} /> :
                            <View
                                style={[styles.userImage, styles.userWithoutImage]}
                            >
                                <User width={65} height={65} color={theme.colors.primary} />
                            </View>
                    }
                </TouchableOpacity>
            </View>
            <Text style={styles.userName}>
                {user.name}
            </Text>
            {/* <Text style={styles.userEstablishment}>
                {user.establishment_name}
            </Text> */}

            <View style={styles.userConfig}>
                <TouchableOpacity style={styles.configOption}>
                    <Edit color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Editar perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.configOption}>
                    <Shield color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Política de privacidade</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.configOption}>
                    <FileText color={theme.colors.black} width={24} height={24} />
                    <Text style={styles.configLabel}>Termos e condições</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onLogout} style={styles.configOption}>
                    <LogOut color={theme.colors.danger} width={24} height={24} />
                    <Text style={[styles.configLabel, { color: theme.colors.danger }]}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Profile;
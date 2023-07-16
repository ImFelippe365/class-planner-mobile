import React, { useCallback, useMemo } from "react";
import {
	View,
	Text,
	Modal as RNModal,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";

import styles from "./styles";
import { X } from "react-native-feather";
import theme from "../../styles/theme";

const Modal = ({ children, isVisible, setIsVisible, title, description }) => {
	
	return (
		<RNModal
			statusBarTranslucent
			animationType="fade"
			visible={isVisible}
			transparent
		>
			<View style={styles.container}>
				<KeyboardAvoidingView behavior="padding" style={styles.content}>
					<View style={styles.closeButtonContainer}>
						<TouchableOpacity onPress={() => setIsVisible(false)}>
							<X width={24} color={theme.colors.black} />
						</TouchableOpacity>
					</View>
					<Text style={styles.title}>{title}</Text>
					{description && <Text style={styles.description}>{description}</Text>}
					<View style={styles.childrenContainer}>{children}</View>
				</KeyboardAvoidingView>
			</View>
		</RNModal>
	);
};

export default Modal;

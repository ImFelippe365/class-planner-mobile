import React, { useCallback, useMemo } from "react";
import { View, Text, Modal as RNModal, TouchableOpacity } from "react-native";

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
				<View style={styles.content}>
					<View style={styles.closeButtonContainer}>
						<TouchableOpacity onPress={() => setIsVisible(false)}>
							<X width={24} color={theme.colors.black} />
						</TouchableOpacity>
					</View>
					<Text style={styles.title}>{title}</Text>
					{description && <Text style={styles.description}>{description}</Text>}
					{children}
				</View>
			</View>
		</RNModal>
	);
};

export default Modal;

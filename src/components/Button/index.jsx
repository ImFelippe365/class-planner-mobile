import React from "react";
import { TouchableOpacity, View, Text, ActivityIndicator } from "react-native";

import styles from "./styles";
import theme from "./../../styles/theme";

const Button = ({
	name,
	style,
	loading = false,
	type = "primary",
	...props
}) => {
	return (
		<TouchableOpacity
			disabled={loading}
			style={[styles.buttonContainer,type === "secondary" && styles.secondaryButton, style, loading && styles.buttonDisabled]}
			{...props}
		>
			{loading ? (
				<ActivityIndicator color={theme.colors.white} />
			) : (
				<Text
					style={[
						styles.buttonText,
						type === "secondary" && styles.secondaryButtonText,
					]}
				>
					{name}
				</Text>
			)}
		</TouchableOpacity>
	);
};

export default Button;

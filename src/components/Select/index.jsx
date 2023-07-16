import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { ChevronDown, ChevronUp } from "react-native-feather";
import theme from "../../styles/theme";

const Select = ({ label, options, style, error, onChange, ...props }) => {
	const [showOptions, setShowOptions] = useState();
	const [selectedOption, setSelectedOption] = useState(
		options[0] ? options[0].label : ""
	);

	return (
		<>
			{label && (
				<Text style={[styles.label, error && styles.errorMode]}>{label}</Text>
			)}
			<View style={styles.relativeContainer}>
				<TouchableOpacity
					{...props}
					onPress={() => setShowOptions((show) => !show)}
					style={[
						styles.container,
						style,
						props.disabled && styles.selectDisabled,
					]}
				>
					<Text numberOfLines={1} style={[styles.selectedOptionText, error && styles.errorMode]}>
						{selectedOption ? selectedOption : "Selecione uma opção"}
					</Text>
					{showOptions ? (
						<ChevronUp color={theme.colors.gray} />
					) : (
						<ChevronDown color={theme.colors.gray} />
					)}
				</TouchableOpacity>
				{showOptions && (
					<View style={styles.optionsContainer}>
						<ScrollView style={{ maxHeight: 150 }}>
							{options.map((option) => (
								<TouchableOpacity
									key={option.value}
									onPress={() => {
										setSelectedOption(option.label);
										setShowOptions(false);
										onChange(option.value);
									}}
									style={styles.optionButton}
								>
									<Text style={styles.optionButtonText}>{option.label}</Text>
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				)}
			</View>
			{error && <Text style={styles.errorText}>{error}</Text>}
		</>
	);
};

export default Select;

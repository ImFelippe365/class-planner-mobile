import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../../components/Header";
import globalStyles from "../../styles/globalStyles";
import { formatDate } from "../../utils/formatDate";
import { Plus } from "react-native-feather";
import theme from "../../styles/theme";
import styles from "./styles";
import DayCard from "../../components/DayCard";
import ClassCard from "../../components/ClassCard";

const Home = () => {
	const todayDate = formatDate(new Date(), {
		month: "long",
		day: "numeric",
	});

	return (
		<View style={globalStyles.container}>
			<Header />
			<View style={styles.header}>
				<View>
					<Text style={globalStyles.subtitle}>{todayDate}</Text>
					<Text style={globalStyles.title}>Hoje</Text>
				</View>
				<TouchableOpacity style={styles.actionAlertButton}>
					<Plus color={theme.colors.white} width={18} />
					<Text style={styles.actionAlertButtonText}>Emitir alerta</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.scheduleListHeader}>
				{[0, 1, 2, 3, 4].map((item) => (
					<DayCard
						key={item.toString()}
						day={`${item + 5}`}
						weekday={item}
						onSelectWeekday={() => {}}
					/>
				))}
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={styles.scheduleListContent}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
						<ClassCard key={item.toString()} />
					))}
				</View>
			</ScrollView>
		</View>
	);
};

export default Home;

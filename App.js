import { StatusBar } from "expo-status-bar"
import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
} from "@expo-google-fonts/inter"
import { AuthProvider } from "./src/hooks/AuthContext"
import Routes from "./src/routes"
import { StudentProvider } from "./src/hooks/StudentContext"

export default function App() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
	})

	if (!fontsLoaded) {
		return null
	}

	return (
		<StudentProvider>
			<AuthProvider>
				<StatusBar style="auto" />
				<Routes />
			</AuthProvider>
		</StudentProvider>
	)
}
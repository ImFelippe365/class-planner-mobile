import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/AuthContext";
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import { useStudent } from "../hooks/StudentContext";

const Routes = () => {
  const { student } = useStudent();

  return (
    <NavigationContainer>
      {student?.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;

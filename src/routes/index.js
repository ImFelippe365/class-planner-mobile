import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/AuthContext";
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const Routes = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;

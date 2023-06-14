import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./../pages/Home/index";
import Profile from "./../pages/Profile/index";
import theme from "./../styles/theme";
import { Calendar, User } from "react-native-feather";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.colors.white,
        elevation: 0,
        borderWidth: 0,
        height: 70,
        borderTopWidth: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarInactiveTintColor: theme.colors.gray,
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => <Calendar color={color} fill={color + "20"} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color }) => <User color={color} fill={color + "20"} />,
      }}
    />
  </Tab.Navigator>
);

const AppRoutes = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Tabs" component={TabNavigation} />
    </Stack.Navigator>
  );
};

export default AppRoutes;

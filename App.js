import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import { Button, Text, View, SafeAreaView } from "react-native";
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabView,
} from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { color } from "react-native-reanimated";
import BottomTab from "./BottomTab";
import ProfileScreen from "./ProfileScreen";
import ExploreScreen from "./ExploreScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={BottomTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// function DetailsStackScreen({ navigation }) {
//   return (
//     <DetailStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#536162",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         alignItems: "center",
//         justifyContent: "center",
//         flex: 1,
//         fontWeight: "bold",
//       },
//     }}
//     >
//       <DetailStack.Screen
//         name="Details"
//         component={DetailsStackScreen}
//         options={{
//           headerLeft: () => (
//             <Icon.Button
//               nane="ios-menu"
//               size={25}
//               backgroundColor="#009387"
//               onPress={() => navigation.openDrawer()}
//             ></Icon.Button>
//           ),
//         }}
//       />
//     </DetailStack.Navigator>
//   );
// }

// const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const TabNav = createMaterialBottomTabNavigator();

// export default function TabNavigation() {
//   return (
//     <NavigationContainer>
// <TabNav.Navigator
//   barStyle={{ backgroundColor: "#ffffff" }}
//   initialRouteName="Home"
// >
//   <TabNav.Screen
//     name="Home"
//     component={HomeScreen}
//     options={{
//       tabBarIcon: ({ color }) => (
//         <MaterialCommunityIcons name="home" color={color} size={26} />
//       ),
//     }}
//   />
//   <TabNav.Screen
//     name="Details"
//     component={DetailsScreen}
//     options={{
//       tabBarIcon: ({ color }) => (
//         <MaterialCommunityIcons name="bell" color={color} size={26} />
//       ),
//     }}
//   />
//   <TabNav.Screen
//     name="Settings"
//     component={SettignsScreen}
//     options={{
//       tabBarIcon: ({ color }) => (
//         <MaterialCommunityIcons name="account" color={color} size={26} />
//       ),
//     }}
//   />
// </TabNav.Navigator>
//     </NavigationContainer>
//   );
// }
// function HomeScreen({ navigation }) {
//   return (
// <Drawer.Navigator>
//   <Drawer.Screen name="Home" component={SettignsScreen} />
//   <Drawer.Screen name="ContactUs" component={contactus} />
//   <Drawer.Screen name="DashBoard" component={dashboard} />
// </Drawer.Navigator>
//     // <SafeAreaView>
//     //   <Button
//     //     onPress={() => navigation.navigate("Details")}
//     //     title="Go To Details"
//     //   />
//     // </SafeAreaView>
//   );
// }
// // function EventCalender() {
// //   return <Text>this is EventCalender</Text>;
// // }
// function aboutus() {
//   return <Text>this is aboutus</Text>;
// }
// function dashboard() {
//   return <Text>this is dashboard</Text>;
// }
// function contactus() {
//   return <Text>this is contactus</Text>;
// }
// function DetailsScreen({ navigation }) {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Button
//         onPress={() => navigation.navigate("Settings")}
//         title="Go To Settings"
//       />
//     </SafeAreaView>
//   );
// }
// function SettignsScreen({ navigation }) {
//   return (
//     <SafeAreaView
//       style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//     >
//       <Button onPress={() => navigation.navigate("Home")} title="Go To Home" />
//     </SafeAreaView>
//   );
//}

// function HomeTabScreen() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//       <Tab.Screen name="Settings" component={SettignsScreen} />
//     </Tab.Navigator>
//   );
// }

//create for stack navigation
// export default function MyStack() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="home" component={Home} />
//         <Stack.Screen name="Tab2" component={Tab2} />
//         <Stack.Screen name="Tab3" component={Tab3} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function Home({ navigation }) {
//   return (
//     <Bottom.Navigator>
//       <Bottom.Screen name="tab1" component={Tab1} />
//       <Bottom.Screen name="tab2" component={Tab2} />
//       <Bottom.Screen name="tab3" component={Tab3} />
//     </Bottom.Navigator>
//   );
// }

// function Tab1({ navigation }) {
//   return (
//     <View>
//       <Button onPress={() => navigation.navigate("tab2")} title="Go to Tab2" />
//     </View>
//   );
// }
// function Tab2({ navigation }) {
//   return (
//     <View>
//       <Button
//         onPress={() => {
//           navigation.navigate("tab3");
//         }}
//         title="Go to Tab3"
//       />
//     </View>
//   );
// }
// function Tab3({ navigation }) {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="OpenDrawer" component={OpenDrawer} />
//       <Drawer.Screen name="DashBoard" component={Dashboard} />
//       <Drawer.Screen name="About Us" component={AboutUs} />
//     </Drawer.Navigator>
//   );
// }
// end of Stack navigation

//START OF BOTTOM TAB NAVIGATOR
// function BottomNavigation() {
//   return (

//   );
// }
// function OpenDrawer() {
//   return (
//     <View style={{ flex: "1", justifyContent: "center", alignItems: "center" }}>
//       <Text>Swipe Right To Open Drawer</Text>
//     </View>
//   );
// }

// function Dashboard() {
//   return <Text>Dashboard</Text>;
// }
// function AboutUs() {
//   return <Text>AboutUs</Text>;
// }

//END OF BOTTOM TAB NAVIGATOR
// import "react-native-gesture-handler";
// import React from "react";
// import { Button, Text, View } from "react-native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Notifications" component={Notifications} />
//     </Stack.Navigator>
//   );
// }

// function Home({ navigation }) {
//   return (
//     <View>
//       <Button
//         onPress={() => {
//           navigation.navigate("Notifications");
//         }}
//         title="click for stack navigator"
//       />
//     </View>
//   );
// }
// function Notifications() {
//   return (
//     <View>
//       <Text>Notification Screen</Text>
//     </View>
//   );
// }
// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="MyStack" component={MyStack} />
//       <Drawer.Screen name="Setting" component={Setting} />
//     </Drawer.Navigator>
//   );
// }

// export default function MyBottom() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="MyDrawer" component={MyDrawer} />
//         <Tab.Screen name="Design" component={Design} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// function Design() {
//   return (
//     <View>
//       <Text>its Bottom man</Text>
//     </View>
//   );
// }

// function Setting() {
//   return (
//     <View>
//       <Text>Setting</Text>
//     </View>
//   );}

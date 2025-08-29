import Colors from "@/constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveBackgroundColor: "#FEFED3",
      }}
    >
      <Tabs.Screen
        name="Nature"
        options={{
          tabBarLabel: "Nature",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <Entypo name="open-book" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="affirmations/[id]"
        options={{
          href: null, // This hides it from the tab bar
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

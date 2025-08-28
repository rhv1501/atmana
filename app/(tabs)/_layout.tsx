import Colors from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
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
              color="black"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Affirmations"
        options={{
          tabBarLabel: "Affirmations",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="flower-tulip"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

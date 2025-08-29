import AppGradient from "@/components/AppGradient";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const AffirmationDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <View className="flex-1 justify-center items-center">
          <Text className="text-white text-2xl font-bold">
            Affirmation Detail
          </Text>
          <Text className="text-white text-lg mt-4">ID: {id}</Text>
        </View>
      </AppGradient>
    </View>
  );
};

export default AffirmationDetail;

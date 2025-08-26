import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
const Nature = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-3xl font-bold text-gray-200 mb-3 text-left">
            Welcome To Atama
          </Text>
          <Text className="text-indigo-100 text-xl font-medium">
            Start your meditation journey today !
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => {}}
                className="mb-4 bg-white/10 rounded-xl p-4 flex-row items-center"
              >
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-white mb-1">
                    {item.title}
                  </Text>
                  <Text className="text-gray-300">{item.image} minutes</Text>
                </View>
                <View className="bg-white/20 p-3 rounded-full">
                  <Text className="text-white text-lg">▶️</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
        <StatusBar style="light" translucent />
      </AppGradient>
    </View>
  );
};

export default Nature;

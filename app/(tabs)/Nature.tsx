import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, ImageBackground, Pressable, Text, View } from "react-native";
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
                className="h-48 my-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  source={MEDITATION_IMAGES[item.id - 1]}
                  resizeMode="cover"
                  className="flex-1 rounded-lg justify-center"
                >
                  <LinearGradient
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                    className="flex-1 justify-center items-center"
                  >
                    <Text className="text-gray-100 font-bold text-3xl text-center ">
                      {item.title}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
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

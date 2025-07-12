import beachImage from "@/assets/meditation-images/beach.webp";
import Custombutton from "@/components/Custombutton";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.4)", "rgba(0, 0, 0, 0.8)"]}
          className="flex-1"
        >
          <SafeAreaView className="flex-1 mx-5 my-8 justify-between">
            <View>
              <Text className="text-4xl font-bold text-center text-slate-300">
                Atmana
              </Text>
              <Text className="text-center text-2xl text-regular text-gray-300 mt-3">
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <Custombutton
                onPress={() => router.push("/Nature")}
                title="hello"
              />
            </View>
            <StatusBar style="light" translucent />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

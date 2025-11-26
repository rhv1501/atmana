import AppGradient from "@/components/AppGradient";
import Custombutton from "@/components/Custombutton";
import { TimerContext } from "@/context/context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Adjustduration = () => {
  const { setDuration } = React.useContext(TimerContext);
  const handlepress = (duration: number) => {
    setDuration(duration);
    router.back();
  };
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-10 left-0 z-10"
        >
          <AntDesign name="left" size={40} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center font-bold text-3xl mb-8 text-white">
            Adjust your meditation
          </Text>
          <View>
            <Custombutton
              title="1 mintute"
              onPress={() => {
                handlepress(60);
              }}
              conatinerStyle="mb-5"
            />
            <Custombutton
              title="5 mintues"
              onPress={() => {
                handlepress(5 * 60);
              }}
              conatinerStyle="mb-5"
            />
            <Custombutton
              title="10 minutes"
              onPress={() => {
                handlepress(10 * 60);
              }}
              conatinerStyle="mb-5"
            />
            <Custombutton
              title="15 minutes"
              onPress={() => {
                handlepress(15 * 60);
              }}
              conatinerStyle="mb-5"
            />
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default Adjustduration;

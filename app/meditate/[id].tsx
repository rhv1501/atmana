import AppGradient from "@/components/AppGradient";
import Custombutton from "@/components/Custombutton";
import meditationImages from "@/constants/meditation-images";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams();
  const [seconds, setSeconds] = useState(10);
  const [ismediatating, setIsmeditating] = useState(false);
  useEffect(() => {
    let timerid: ReturnType<typeof setTimeout>;

    if (seconds === 0) {
      setIsmeditating(false);
      return;
    }
    if (ismediatating) {
      timerid = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerid);
    };
  }, [seconds, ismediatating]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0,0,0,0.9)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-10 left-0 z-10"
          >
            <AntDesign name="left" size={40} color="white" />
          </Pressable>
          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center ">
              <Text className="text-4xl text-blue-800 font-rmono">00:{seconds}</Text>
            </View>
          </View>
          <View className="mb-5">
            <Custombutton
              title="Start Meditation"
              onPress={() => {
                setIsmeditating(true);
              }}
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Page;

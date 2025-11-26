import AppGradient from "@/components/AppGradient";
import Custombutton from "@/components/Custombutton";
import meditationImages from "@/constants/meditation-images";
import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/MeditationData";
import { TimerContext } from "@/context/context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Audio } from "expo-av";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
const Page = () => {
  const { id } = useLocalSearchParams();
  const { duration: seconds, setDuration } = React.useContext(TimerContext);
  // const [seconds, setSeconds] = useState(10);
  const [ismediatating, setIsmeditating] = useState(false);
  const [audio, setAudio] = useState<Audio.Sound>();
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    let timerid: ReturnType<typeof setTimeout>;

    if (seconds === 0) {
      setIsmeditating(false);
      playpause();
    }
    if (ismediatating) {
      timerid = setTimeout(() => {
        setDuration(seconds - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerid);
    };
  }, [seconds, ismediatating]);

  useEffect(() => {
    return () => {
      if (audio) {
        audio?.unloadAsync();
      }
    };
  }, [audio]);
  const togglemeditation = async () => {
    if (seconds === 0) {
      setDuration(60);
    }
    await playpause();
    setIsmeditating(!ismediatating);
  };
  useEffect(() => {
    return () => {
      audio?.unloadAsync();
    };
  }, [audio]);

  const playpause = async () => {
    const sound = audio ? audio : await playSound();

    const status = await sound.getStatusAsync();
    if (status.isLoaded && !isPlaying) {
      await sound.playAsync();
      setIsPlaying(true);
    } else {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  const playSound = async () => {
    const audioFile = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(AUDIO_FILES[audioFile]);
    setAudio(sound);
    return sound;
  };
  const toggleModal = async () => {
    if (ismediatating) {
      togglemeditation();
    }
    router.push("/(modal)/adjust-duration");
  };

  const formattedmin = String(Math.floor(seconds / 60)).padStart(2, "0");
  const formattedsec = String(seconds % 60).padStart(2, "0");

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
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedmin}:{formattedsec}
              </Text>
            </View>
          </View>
          <View className="mb-5">
            <Custombutton title="Adjust Duration" onPress={toggleModal} />
            <Custombutton
              title={`${ismediatating ? "Stop Meditation" : "Start Meditation"}`}
              onPress={togglemeditation}
              conatinerStyle="mt-4"
            />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Page;

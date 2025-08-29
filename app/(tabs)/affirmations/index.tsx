import AppGradient from "@/components/AppGradient";
import Guided from "@/components/Guided";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import React from "react";
import { ScrollView, Text, View } from "react-native";
const Affirmations = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <Text className="text-zinc-50 text-2xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <Guided key={g.title} title={g.title} previews={g.data} />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmations;

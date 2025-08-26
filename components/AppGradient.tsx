import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorValue } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppGradient = ({
  children,
  colors,
}: {
  children: React.ReactNode;
  colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
}) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <SafeAreaView className="flex-1 mx-5 my-4 justify-between">
        {children}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;

import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title?: string;
  onPress?: () => void;
  textstyle?: string;
  conatinerStyle?: string;
}

const Custombutton = ({
  onPress,
  title,
  textstyle = "",
  conatinerStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${conatinerStyle}`}
      onPress={onPress}
    >
      <Text className={`${textstyle} font-semibold text-lg`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Custombutton;

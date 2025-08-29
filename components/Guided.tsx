import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
interface GuidedProps {
  title: string;
  previews: GalleryPreviewData[];
}
const Guided = ({ title, previews }: GuidedProps) => {
  return (
    <View className="my-5 ">
      <View className="mb-2">
        <Text className="text-white font-bold text-xl">{title}</Text>
      </View>
      <View className="space-x-2">
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(items) => items.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}` as any} asChild>
              <Pressable>
                <View className="h-36 w-32 rounded-md mr-4 ">
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    className="w-full h-full"
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default Guided;

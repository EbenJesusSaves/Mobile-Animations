import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ParallaxType } from "../mock/homesMockData";
import Animated from "react-native-reanimated";

interface Props {
  parallax: ParallaxType[];
}

// ================const
const { width } = Dimensions.get("window");

const _screenWidth = width * 0.7;
const _screenHight = _screenWidth * 1.67;
const _spacing = 16;
const _fullWidth = _screenWidth + _spacing;
const ParallaxItem = ({
  item,
  index,
}: {
  item: ParallaxType;
  index: number;
}) => {
  return (
    <View
      style={{
        height: _screenHight,
        width: _screenWidth,
        backgroundColor: "rgba(0,0,0,1)",
        borderRadius: _spacing,
        overflow: "hidden",
        padding: _spacing,
      }}
    >
      <Animated.Image
        style={[StyleSheet.absoluteFillObject, { opacity: 0.6 }]}
        source={{ uri: item.image }}
      />
      <Text
        style={{
          fontSize: 24,
          color: "#fff",
        }}
      >
        {item.name}
      </Text>
    </View>
  );
};
export const Parallax = ({ parallax }: Props) => {
  return (
    <View>
      <Animated.FlatList
        data={parallax}
        keyExtractor={(item) => item.image}
        // this is the style of the items [think of it as cards]
        contentContainerStyle={{
          gap: _spacing,
          paddingHorizontal: (width - _screenWidth) / 2,
        }}
        snapToInterval={_fullWidth}
        horizontal
        renderItem={({ item, index }) => {
          return <ParallaxItem item={item} index={index} />;
        }}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

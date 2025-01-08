import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ParallaxType } from "../mock/homesMockData";
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

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
  scrollX,
}: {
  item: ParallaxType;
  index: number;
  scrollX: SharedValue<number>;
}) => {
  //
  const _scaleFactor = 0.2;
  const _translateX = _fullWidth * _scaleFactor * 2;
  const animeStyle = useAnimatedStyle(() => {
    console.log(scrollX);

    return {
      transform: [
        { scale: 1 + _scaleFactor },
        {
          translateX: interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [-_translateX, 0, _translateX],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

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
        style={[StyleSheet.absoluteFillObject, { opacity: 0.6 }, animeStyle]}
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
  const scrollValue = useSharedValue(0);

  const scrollX = useAnimatedScrollHandler((e) => {
    scrollValue.value = e.contentOffset.x / _fullWidth;
  });

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
          return (
            <ParallaxItem item={item} index={index} scrollX={scrollValue} />
          );
        }}
        decelerationRate={"fast"}
        onScroll={scrollX}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

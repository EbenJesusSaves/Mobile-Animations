import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

type DataItem = {
  name: string;
  description: string;
  imageUrl: string;
  date: string;
};

type Props = {
  dataArray: DataItem[];
};
type AnimatedCardProp = {
  item: DataItem;
  sharedValue: SharedValue<number>;
  index: number;
};

// ================== consts =============//
const { height } = Dimensions.get("screen");

const _spacing = 4;
const _itemSize = 0.72 * height;
const _itemFullSize = _itemSize + _spacing * 2;

const AnimatedCard = ({ item, index, sharedValue }: AnimatedCardProp) => {
  const styled = useAnimatedStyle(() => {
    console.log({ sh: sharedValue.value, index });

    return {
      opacity: interpolate(
        sharedValue.value,
        [index - 1, index, index + 1],
        [0.3, 1, 0.3]
      ),
      transform: [
        {
          scale: interpolate(
            sharedValue.value,
            [index - 1, index, index + 1],
            [0.95, 1, 0.95]
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        {
          backgroundColor: "#ffff",
          flex: 1,
          height: _itemSize,
          padding: _spacing * 2,
          borderRadius: 8,
        },
        styled,
      ]}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={[StyleSheet.absoluteFillObject, { borderRadius: 8 }]}
        blurRadius={50}
      />
      <Image
        source={{ uri: item.imageUrl }}
        style={{ flex: 1, height: _itemSize * 0.4 }}
      />
      <View style={{ gap: _spacing }}>
        <Text style={{ fontSize: 24, fontWeight: 700, color: "white" }}>
          {item.name}
        </Text>
        <Text style={{ color: "#ddd" }}>{item.description}</Text>
      </View>
    </Animated.View>
  );
};

export const VerticalList = ({ dataArray }: Props) => {
  const sharedValue = useSharedValue(0);

  const scroll = useAnimatedScrollHandler((e) => {
    sharedValue.value = e.contentOffset.y / _itemFullSize;
  });

  return (
    <Animated.FlatList
      contentContainerStyle={{
        padding: _spacing * 3,
        gap: _spacing * 2,
        paddingVertical: (height - _itemFullSize) / 2,
      }}
      data={dataArray}
      renderItem={({ item, index }) => (
        <AnimatedCard item={item} index={index} sharedValue={sharedValue} />
      )}
      snapToInterval={_itemFullSize}
      scrollEventThrottle={16}
      onScroll={scroll}
    />
  );
};

import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ParallaxType } from "../mock/homesMockData";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
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

const dummyDetails = Array(10).fill({ temp: 10 });

const DetailsList = ({
  scrollX,
  index,
}: {
  index: number;
  scrollX: SharedValue<number>;
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="temperature-high" size={24} color="white" />
        <Text style={{ color: "white" }}>Temperature: 400</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="temperature-high" size={24} color="white" />
        <Text style={{ color: "white" }}>Humidity: 120</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="temperature-high" size={24} color="white" />
        <Text style={{ color: "white" }}>Timer: on</Text>
      </View>
    </View>
  );
};

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

  const textStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: `${interpolate(
            scrollX.value,
            [index - 1, index, index + 1],
            [-100, 0, 100]
          )}%`,
        },
      ],
    };
  });

  return (
    <View style={styles.card}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: "rgba(0,0,0,1)",
            overflow: "hidden",
            borderRadius: _spacing,
            padding: _spacing,
          },
        ]}
      >
        <Animated.Image
          style={[StyleSheet.absoluteFillObject, { opacity: 0.6 }, animeStyle]}
          source={{ uri: item.image }}
        />
        <Animated.View
          style={[
            {
              position: "absolute",
              left: 0,
              top: 0,
              width: _screenHight,
            },
            textStyles,
          ]}
        >
          <Animated.View
            style={[
              {
                top: _screenHight,
                transformOrigin: "0% 0%",
                alignItems: "center",
                justifyContent: "center",
                transform: [
                  {
                    rotate: "-90deg",
                  },
                ],
              },
            ]}
          >
            <Text
              style={{
                fontSize: 70,
                color: "#fff",
              }}
              numberOfLines={1}
              adjustsFontSizeToFit
            >
              {item.name}
            </Text>
          </Animated.View>
        </Animated.View>
      </View>
      <View>
        <DetailsList index={index} scrollX={scrollX} />
      </View>
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

const styles = StyleSheet.create({
  card: {
    height: _screenHight,
    width: _screenWidth,
  },
});

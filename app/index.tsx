import { homes } from "@/components/mock/homesMockData";
import { data } from "@/components/mock/mockdata";
import { Parallax } from "@/components/Parallax/Parallax";
import { ThemedView } from "@/components/ThemedView";
import { VerticalList } from "@/components/ui/VerticalList";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const login = () => {
  return (
    <GestureHandlerRootView>
      <ThemedView style={styles.container}>
        <Parallax parallax={homes} />
        {/* <VerticalList dataArray={data} /> */}
      </ThemedView>
    </GestureHandlerRootView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    backgroundColor: "#09143c",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

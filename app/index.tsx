import { data } from "@/components/mock/mockdata";
import { ThemedView } from "@/components/ThemedView";
import { VerticalList } from "@/components/ui/VerticalList";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

const login = () => {
  return (
    <ThemedView style={styles.container}>
      <VerticalList dataArray={data} />
    </ThemedView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

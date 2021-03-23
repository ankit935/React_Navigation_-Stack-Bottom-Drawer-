import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ExploreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Explore Screen</Text>
      <Button
        title="Go To Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

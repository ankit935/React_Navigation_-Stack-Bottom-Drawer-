import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>DetailsScreen</Text>
      <Button
        title="Go To Explore"
        onPress={() => navigation.navigate("Explore")}
      />
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

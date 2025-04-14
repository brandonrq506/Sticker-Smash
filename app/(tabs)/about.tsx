import { Text, View, Platform, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

      <Text style={styles.text}>
        {Platform.OS} {Platform.Version}
      </Text>

      {Platform.OS === "android" && (
        <View>
          <Text style={styles.text}>Android specific content</Text>
          <Text style={styles.text}>
            {JSON.stringify(Platform.constants, null, 2)}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

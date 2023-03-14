import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ content, onDeleteGoal, id }) {
  function handleDeleteGoal() {
    onDeleteGoal(id);
  }
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={handleDeleteGoal}
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

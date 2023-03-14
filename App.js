import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goalList, setGoalList] = useState([
    { id: "g1", content: "Learn React Native" },
  ]);

  const startAddGoalhandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalhandler = () => {
    setModalIsVisible(false);
  };

  const handleAddGoalPress = (enteredGoal) => {
    if (enteredGoal.length > 0) {
      setGoalList((currentGoal) => [
        ...currentGoal,
        { id: `g+${goalList.length + 1}`, content: enteredGoal },
      ]);
      setModalIsVisible(false);
    }
  };

  const handleDeleteGoal = (id) => {
    const newGoalList = goalList.filter((goal) => goal.id !== id);
    setGoalList(newGoalList);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.btn}>
          <Button
            title="Add New Goal"
            onPress={startAddGoalhandler}
            color="#5e0acc"
          />
        </View>
        <GoalInput
          onAddGoal={handleAddGoalPress}
          modalVisibility={modalIsVisible}
          onCancel={endAddGoalhandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  content={itemData.item.content}
                  id={itemData.item.id}
                  onDeleteGoal={handleDeleteGoal}
                />
              );
            }}
            alwaysBounceHorizontal={false}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
  btn: {
    marginBottom: 10,
  },
});

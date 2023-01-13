import { StyleSheet, View, Button, FlatList } from 'react-native';
import { useState } from 'react';
import StatusBar from 'expo-status-bar';


import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });

    console.log("DELETE");
  }

  function endAddGoalHandler(){
    setModalIsVisible(false); 
}

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...courseGoals,
    { text: enteredGoalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false);
  }

  function startAtGoalHandler() {
    setModalIsVisible(true);
  }

  return (
    <>
    {/* <StatusBar />  */}
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="purple" onPress={startAtGoalHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item, value) => { return item.id }}
          data={courseGoals} renderItem={(itemData) => {
            return <GoalItem id={itemData.item.id} onDeleteItem={deleteGoalHandler} text={itemData.item.text} />;
          }} alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  )
  
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 50,
backgroundColor: 'black'
  },

  goalsContainer: {
    flex: 8
  }
});

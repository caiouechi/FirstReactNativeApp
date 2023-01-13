import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image} from 'react-native';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

 

    return (
        <Modal onTouchCancel={props.visible} animationType="slide" visible={props.visible}>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/img/goal.png')} />
                <TextInput style={styles.textInput} color="#ffffff" placeholder="Your course goal" onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='add goal' onPress={addGoalHandler} color="#5e0acc"></Button>
                    </View>
                    <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color="#f31282"></Button>
                    </View>
                </View>
            </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'gray',
        backgroundColor: '#311b6b'
    },
    image:{
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColer: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: "#ffffff",
        width: '100%',
        padding: 8,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    },
    button:{
        width: 100,
        marginHorizontal : 8
    }

});
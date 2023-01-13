import { View, Text, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';


function GoalItem(props) {
    return (
        <Pressable
        style={({pressed}) => pressed && styles.pressedItem}
        
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
        </Pressable>
    )
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'purple'
    },
    goalText: {
        color: 'white'
    },
    pressedItem: {
        opacity : 0.1
    }
});
import { useCallback, useContext, useState } from "react";
import { View, Text } from "react-native";
import { Button, Card } from "react-native-elements";
import { styles, TechContext } from "../App";
import Message from '.././components/Message'

export default function TechnologyStore({ route, navigation }) {
    let { techKey } = route.params
    let TechList = useContext(TechContext)

    let currentTechItem = TechList.find(t => t.key === techKey)

    let [itemAmount, setItemAmount] = useState(currentTechItem.added+1);
    let addToCart = useCallback(() => {
        setItemAmount(itemAmount+1)
        currentTechItem.added = itemAmount
    })
    return(
        <View style={styles.container}>
            <Card styles={{paddingBottom: 10}}>
                <Card.Title>{currentTechItem.name}: ${currentTechItem.price}</Card.Title>
                <Card.Divider />
                <Text style={styles.card}>{currentTechItem.description}</Text>
                <Message data={currentTechItem} style={styles.card} />
            </Card>
            
            <Button title="Add to Cart"
                style={styles.size} 
                onPress={addToCart}
            />
            <Button title="Go to Home Page"
                style={styles.size} 
                onPress={() => navigation.navigate("Home")}
            />
            <Button title="Go to Cart"
                style={styles.size} 
                onPress={() => navigation.navigate("Checkout")}
            />
        </View>
    );
}

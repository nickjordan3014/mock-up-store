import { useCallback, useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { Button } from "react-native-elements";
import { styles, TechContext } from "../App.js"

export default function HomeScreen({ route, navigation }) {
    let TechList = useContext(TechContext);
    let gotoTech = useCallback(({ key }) => { 
        navigation.navigate("Technology", { techKey: key, TechList: TechList})
    });
    
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Best Bought: Technology Store of the Future</Text>
            <FlatList data={TechList} renderItem={({ item }) => 
                <View>
                    <Button title={item.name + ": $" + item.price} 
                        onPress={() => gotoTech(item)}
                        style={styles.size} 
                    />
                </View>
            }/>
            <Button title={"Go to Cart"}
                onPress={() => navigation.navigate("Checkout")} 
                style={styles.size}
            />
        </View>
    )
}
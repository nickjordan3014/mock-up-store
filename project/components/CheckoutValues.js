import { FlatList, Text, View } from "react-native" 
import { Card } from "react-native-elements"
import { styles } from "../App"

export default function CheckoutValues(props) {
    let TechList = props.data
    let max = TechList.length
    let strings = []
    let currString

    for (let i = 0; i < max; i++) { // resetting cart
        TechList[i].inCart = false
        strings = []
    }

    for (let i = 0; i < max; i++) { // Creating String Array
        if (TechList[i].added > 1) {
            currString = "You have " + TechList[i].added + " " + TechList[i].name + "s in your cart."
            strings.push(currString)
        } else if(TechList[i].added === 1) {
            currString = "You have " + TechList[i].added + " " + TechList[i].name + " in your cart."
            strings.push(currString)
        }
    }

    return ( 
        <FlatList 
            data={strings}
            renderItem={({ item }) => 
                <View>
                    <Card style={styles.checkout}>
                        <Text>{item}</Text>
                    </Card>
                </View>
            }
        />
    )
}
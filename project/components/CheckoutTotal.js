import { Text } from "react-native";
import { styles } from "../App";

export default function CheckoutTotal(props) {
    let TechList = props.data
    let total = 0 //resets total every visit
    let currValue
    for (let i = 0; i < TechList.length; i++) {
        currValue = TechList[i].added * TechList[i].price
        total += currValue
    }
    return (
            <Text style={styles.heading}>Your total is: ${total}</Text>
    )
}
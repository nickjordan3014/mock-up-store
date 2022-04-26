import { useCallback, useContext } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { styles, TechContext } from "../App";
import CheckoutTotal from "../components/CheckoutTotal";
import CheckoutValues from "../components/CheckoutValues";

export default function Checkout({navigation}) {
    let TechList = useContext(TechContext)
    let EmptyCart = useCallback(() => {
        for(let i = 0; i < TechList.length; i++) {
            TechList[i].added = 0
        }
        navigation.navigate("Home")
    }) 
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>Checkout</Text>
            <CheckoutValues data={TechList} />
            <CheckoutTotal data={TechList} />
            <Button title="Empty Cart"
                style={styles.size}
                onPress={() => EmptyCart()}
            />
        </View>
    );
}

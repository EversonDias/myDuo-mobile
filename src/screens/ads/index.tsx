import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GameParams } from "../../@types/navigation";
import { Background } from "../../components/background";
import { styles } from "./styles";


export function Ads() {
    const route = useRoute();
    const game = route.params as GameParams;

    console.log(game)
    return (
        <Background>
            <SafeAreaView style={styles.container}>

            </SafeAreaView>
        </Background>
    )
}
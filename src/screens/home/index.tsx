import { View, Image, FlatList } from "react-native";
import { styles } from "./styles";

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from "../../components/heading";

import { GAMES } from "../../utils/games";
import { CardGame } from "../../components/cardGame";

export function Home() {
    return (
        <View style={styles.container}>
            <Image
                source={logoImg}
                style={styles.logo}
            />

            <Heading
                title="Encontre seu duo!"
                subtitle="Selecione o game que deseja jogar..."
            />

            <FlatList
                data={GAMES}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <CardGame
                        data={item}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.contentList}
            />

        </View>
    );
}
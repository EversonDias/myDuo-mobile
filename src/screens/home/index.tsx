import { useEffect, useState } from "react";

import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";

import logoImg from '../../assets/logo-nlw-esports.png';

import { Heading } from "../../components/heading";
import { CardGame, CardGameProps } from "../../components/cardGame";
import { Background } from "../../components/background";
import { useNavigation } from "@react-navigation/native";


export function Home() {
    const [games, setGames] = useState<CardGameProps[]>([]);
    const navigation = useNavigation();

    function handleOpenGame(){
        navigation.navigate('ads');
    }

    useEffect(() => {
        fetch('http://192.168.10.3:3333/games')
            .then(response => response.json())
            .then(data => setGames(data))
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}
                />

                <Heading
                    title="Encontre seu duo!"
                    subtitle="Selecione o game que deseja jogar..."
                />

                <FlatList
                    data={games}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <CardGame
                            data={item}
                            onPress={handleOpenGame}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                />

            </SafeAreaView>
        </Background>
    );
}
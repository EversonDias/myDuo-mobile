import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    logo: {
        width: 72,
        height: 40
    },
    ghost: {
        width: 20,
        height: 20,
    },
    cover: {
        width: 330,
        height: 150,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        marginTop: 15,
    },
    containerList: {
        width: '100%',
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start'
    }
});
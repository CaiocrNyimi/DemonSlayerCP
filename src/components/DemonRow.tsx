import { StyleSheet, Text, View, Image } from 'react-native'

export type Demon = {
    id: number;
    name: string;
    age: number;
    gender: string;
    race: string;
    description: string;
    img: string;
    affiliation_id: number;
    arc_id: number
    quote: string;
}

export default function DemonRow({demon}: {demon: Demon}) {
    return(
        <View style={ styles.container }>
            <Image
                source={ {uri: demon.img} }
                style={ styles.image }
            />
            <Text style={ styles.title }>{demon.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dfd8d898',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        marginVertical: 5,
        borderRadius: 12,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: 12,
        resizeMode: 'contain',
        marginRight: 10
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
})
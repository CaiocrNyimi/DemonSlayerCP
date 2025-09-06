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
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    image: {
        width: 50,
        height: 80,
        borderRadius: 8,
        marginLeft: 12
    },
    title: {
        marginHorizontal: 10,
        fontSize: 16,
        width: '50%'
    },
})
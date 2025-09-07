import { View, StyleSheet, Text, Image, ScrollView, Alert } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"    

import { useRoute } from "@react-navigation/native"

import { Demon } from "../components/DemonRow"

import humanBackground from "../../assets/background-human.png"
import demonBackground from "../../assets/background-demon.png"

const DemonDetailsScreen = () => {

    const route = useRoute()
    const { demon } = route.params as { demon: Demon }

    const backgroundImage = demon.race === 'Human' ? humanBackground : demonBackground;

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Image
                    source={backgroundImage}
                    style={styles.background}
                    resizeMode="cover"
                />

                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: demon.img }}
                            style={styles.profileImage}
                        />
                    </View>

                    <View style={styles.infoCard}>
                        <Text style={styles.name}>{demon.name}</Text>

                        <View style={styles.infoRow}>
                            <View style={styles.infoContainer}>
                                <Text style={styles.label}>Idade: </Text>
                                <Text style={styles.value}>{demon.age}</Text>
                            </View>

                            <View style={styles.infoContainer}>
                                <Text style={styles.label}>Raça: </Text>
                                <Text style={styles.value}>{demon.race}</Text>
                            </View>

                            <View style={styles.infoContainer}>
                                <Text style={styles.label}>Gênero: </Text>
                                <Text style={styles.value}>{demon.gender}</Text>
                            </View>
                        </View>

                        <Text style={styles.description}>{demon.description}</Text>

                        {demon.quote && (
                            <View style={styles.quoteContainer}>
                                <Text style={styles.quoteText}>{demon.quote}</Text>
                            </View>
                        )}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default DemonDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    background: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
    },
    scrollContent: {
        flexGrow: 1,
    },
    imageContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
    },
    profileImage: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        bottom: -70,
    },
    infoCard: {
        flex: 1,
        width: '96%',
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        paddingTop: 80,
        zIndex: 1,
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 40,
    },
    infoContainer: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#e8e8e8',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 14,
        color: '#000',
    },
    value: {
        fontSize: 14,
        color: '#b40000ff',
    },
    description: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        marginBottom: 30,
        lineHeight: 24,
    },
    quoteContainer: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        padding: 15,
    },
    quoteText: {
        fontSize: 16,
        color: '#fff',
        fontStyle: 'italic',
    },
})
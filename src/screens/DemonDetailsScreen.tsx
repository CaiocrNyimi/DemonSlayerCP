import { View, StyleSheet, Text, Image, ScrollView, Alert } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"    

import { useRoute } from "@react-navigation/native"

import { Demon } from "../components/DemonRow"

const DemonDetailsScreen = () => {

    const route = useRoute()
    const { demon } = route.params as { demon: Demon }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View>
                    <Image 
                        source={{ uri: demon.img }} 
                        style={{ width: '100%', height: 320 }}
                    />
                </View>

                <View style={ styles.content }>
                    <Text style={{ fontSize: 32, fontWeight: 'bold', marginVertical: 12 }}>
                        { demon.name }
                    </Text>

                    <View style={{ flexDirection: 'row', marginBottom: 12 }}>
                        <Text 
                            style={[styles.text, { marginBottom: 12 }]}
                        >
                            { demon.age }
                        </Text>
                        <Text 
                            style={[styles.text, { marginBottom: 12 }]}
                        >
                            { demon.race }
                        </Text>
                        <Text 
                            style={[styles.text, { marginBottom: 12 }]}
                        >
                            { demon.gender }
                        </Text>
                    </View>

                    {/* Sinopse */}
                    <ScrollView 
                        style={ styles.synopsisContainer }
                        contentContainerStyle={ styles.synopsisContent }
                    >
                        <Text style={[styles.text, { marginBottom: 24 }]}>
                            { demon.description }
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default DemonDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingHorizontal: 20,
        flex: 1
    },
    text: {
        fontSize: 17
    },
    synopsisContainer: {
        flex: 1,
        backgroundColor: '#e8e8e8',
        padding: 14,
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 12
    },
    synopsisContent: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})
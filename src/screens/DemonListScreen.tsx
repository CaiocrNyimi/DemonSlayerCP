import { View, StyleSheet, Text, ActivityIndicator, RefreshControl, Pressable, Image } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useCallback } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getDemons } from "../services/apiService";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DemonRow, { Demon } from "../components/DemonRow";
import DemonDetailsScreen from "./DemonDetailsScreen";

const DemonListScreen = () => {
    const navigation = useNavigation();
    const queryClient = useQueryClient();

    const { data: demons, isLoading, isError, refetch, isFetching } = useQuery({
        queryKey: ['demons'],
        queryFn: getDemons,
        select: (data) => data.sort((a: Demon, b: Demon) => a.name.localeCompare(b.name)),
    });

    useFocusEffect(
        useCallback(() => {
            queryClient.invalidateQueries( { queryKey: ["demons"] })
        }, [queryClient])
    );

    if (isLoading) {
        return(
            <View style={styles.center}>
                <ActivityIndicator size='large' color="#eb4435" />
            </View>
        )
    }

    if (isError) {
        return (
            <View style={styles.center}>
                <Text>Erro ao carregar slayers!</Text>
            </View>
        );
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <SwipeListView
                    style={ styles.list }
                    data={demons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => navigation.navigate("DemonDetailsScreen", { demon: item })}
                        >
                            <DemonRow demon={item} />
                        </Pressable>
                    )}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsVerticalScrollIndicator={false}

                    refreshControl={
                        <RefreshControl
                            refreshing={false}  
                            onRefresh={refetch} 
                            colors={["#cecece"]}
                            tintColor="#cecece"
                        />
                    }
                    rightOpenValue={-75}
                    disableRightSwipe={true}
                />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default DemonListScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#eee'
    },
    list: {
        marginVertical: 16,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold'
    },
   center: {
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"
    },
    rowBack: {
        alignItems: 'flex-end',
        backgroundColor: '#FF4136',
        justifyContent: 'flex-end',
        borderRadius: 8,
    },
    backRightBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: '100%',
    },
    backTextWhite: {
        color: '#FFF',
        fontWeight: 'bold',
    },
})
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function GameScreen() {

    
    const randomNumbers = Array.from({ length: 6 }, () => 1 + Math.floor(Math.random() * 10));
    const target = randomNumbers.slice(0, 4).reduce((acc, curr) => acc + curr, 0);

    // sufle the array
    for (let i = randomNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = randomNumbers[i];
        randomNumbers[i] = randomNumbers[j];
        randomNumbers[j] = temp;
    }


    return (
        <SafeAreaView style={styles.container}>
            <ThemedText type='title'>Game</ThemedText>
            <ThemedText type='defaultSemiBold'>GameScreen</ThemedText>
            <ThemedText style={styles.target}>{target}</ThemedText>
            {/* <Text style={{color: "#fff"}} >{randomNumbers}</Text> */}
            <View style={styles.numbersContainer}>
                {
                    randomNumbers.map((number, index) => (
                        <ThemedText key={index} style={styles.number}>{number}</ThemedText>
                    ))
                }
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    target: {
        marginTop: 50,
        width: '50%',
        textAlign: 'center',
        padding: 20,
        backgroundColor: '#adb5bd',
        color: '#212529',
        fontSize: 24,
    },
    numbersContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 50,
        justifyContent: 'space-around',
    },
    number: {
        width: 100,
        backgroundColor: '#6c757d',
        textAlign: 'center',
        padding: 20,
        color: '#f8f9fa',
        fontSize: 24,
        marginHorizontal: 15,
        marginVertical: 25,
    } 
});

import { RandomNumber } from '@/components/game/RandomNumber';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function GameScreen() {

    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
    const randomNumbers = Array.from({ length: 6 }).map(() => 1 + Math.floor(Math.random() * 10));
    const target = randomNumbers.slice(0, 4).reduce((acc, curr) => acc + curr, 0);
    console.log(randomNumbers);
    // sufle the array
    // for (let i = randomNumbers.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * i);
    //     const temp = randomNumbers[i];
    //     randomNumbers[i] = randomNumbers[j];
    //     randomNumbers[j] = temp;
    // }

    const isSelected = (numberIndex: number) => {
        return selectedNumbers.indexOf(numberIndex) >= 0;
    }

    const handleSelect = (numberIndex: number) => {
        setSelectedNumbers((preState) => {
            return [...preState, numberIndex];
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ThemedText type='title'>Game</ThemedText>
            <ThemedText type='defaultSemiBold'>GameScreen</ThemedText>
            <ThemedText style={styles.target}>{target}</ThemedText>
            <View style={styles.numbersContainer}>
                {
                    randomNumbers.map((number, index) => (
                        <RandomNumber 
                            number={number} 
                            key={index} 
                            isDisabled={isSelected(index)} 
                            id={index}
                            selectNumber={handleSelect}
                        />
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
    }
});

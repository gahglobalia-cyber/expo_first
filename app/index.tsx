import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to ExpoMyApp</Text>
            <Link href="/login" asChild>
                <TouchableOpacity style={styles.button}>
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.gradient}
                    >
                        <Text style={styles.buttonText}>Go to Login</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    button: {
        width: 200,
        height: 50,
        borderRadius: 25,
        overflow: 'hidden',
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

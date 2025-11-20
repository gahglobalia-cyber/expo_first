import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function SignupScreen() {
    const router = useRouter();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignup = () => {
        // Implement signup logic here
        console.log('Signup pressed', { fullName, email, password, confirmPassword });
        // For demo, navigate to login or home
        // router.replace('/');
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerShown: false }} />
            <StatusBar style="light" />

            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.background}
            />

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardView}
            >
                <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <Ionicons name="person-add-outline" size={80} color="#fff" style={styles.logo} />
                        <Text style={styles.title}>Create Account</Text>
                        <Text style={styles.subtitle}>Sign up to get started</Text>
                    </View>

                    <View style={styles.formContainer}>
                        <View style={styles.inputContainer}>
                            <Ionicons name="person-outline" size={20} color="#fff" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Full Name"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                value={fullName}
                                onChangeText={setFullName}
                                autoCapitalize="words"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#fff" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#fff" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Ionicons
                                    name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="rgba(255,255,255,0.7)"
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#fff" style={styles.inputIcon} />
                            <TextInput
                                style={styles.input}
                                placeholder="Confirm Password"
                                placeholderTextColor="rgba(255,255,255,0.7)"
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                secureTextEntry={!showConfirmPassword}
                            />
                            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                                <Ionicons
                                    name={showConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="rgba(255,255,255,0.7)"
                                />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
                            <LinearGradient
                                colors={['#ff9a9e', '#fad0c4']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientButton}
                            >
                                <Text style={styles.signupButtonText}>SIGN UP</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <View style={styles.loginContainer}>
                            <Text style={styles.loginText}>Already have an account? </Text>
                            <TouchableOpacity onPress={() => router.push('/login')}>
                                <Text style={styles.loginLink}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    keyboardView: {
        flex: 1,
    },
    contentContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        marginBottom: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)',
    },
    formContainer: {
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 15,
        marginBottom: 15,
        paddingHorizontal: 15,
        height: 55,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        fontSize: 16,
    },
    signupButton: {
        width: '100%',
        height: 55,
        borderRadius: 25,
        overflow: 'hidden',
        marginTop: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    gradientButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signupButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    loginText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 14,
    },
    loginLink: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});

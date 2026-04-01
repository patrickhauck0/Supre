import { router } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { LinceIcon } from '../components/ui/LinceIcon';
import { useAuthStore } from '../store/authStore';

const videoSource = require('../../assets/videos/login_register_animation.mp4');

export const LoginScreen = () => {
  const { login, isLoading } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Background Login Wallpaper
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Erro no Login', error.message);
    }
  };

  return (
    <View className="flex-1 bg-slate-50">
      <View style={[StyleSheet.absoluteFillObject, { overflow: 'hidden' }]}>
        <VideoView
          style={{ width: '100%', height: '100%' }}
          player={player}
          allowsFullscreen={false}
          allowsPictureInPicture={false}
          nativeControls={false}
          contentFit="fill"
        />
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(30, 64, 175, 0.35)' }]} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="flex-1 items-center justify-center p-6 w-full md:p-12">
            <View className="w-full max-w-md bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 items-center">

              <LinceIcon size={64} />
              <Text className="text-2xl font-bold text-gray-800 mt-5 mb-1 text-center">
                Bem-vindo de volta
              </Text>
              <Text className="text-gray-500 mb-8 text-center text-sm md:text-base">
                Faça login para gerenciar seu estoque.
              </Text>

              <InputField
                label="E-mail"
                placeholder="seu@email.com"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />

              <InputField
                label="Senha"
                placeholder="••••••••"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                onSubmitEditing={handleLogin}
                returnKeyType="send"
              />

              <View className="w-full items-end mb-6 -mt-2">
                <TouchableOpacity>
                  <Text className="text-blue-800 font-bold text-sm">Esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>

              <Button label="Entrar" isLoading={isLoading} onPress={handleLogin} />

              <View className="flex-row items-center mt-6">
                <Text className="text-gray-500">Não tem uma conta? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/register')}>
                  <Text className="text-blue-800 font-bold">Cadastre-se grátis</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

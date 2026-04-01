
import { router } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { LinceIcon } from '../components/ui/LinceIcon';
import { useAuthStore } from '../store/authStore';

const videoSource = require('../../assets/videos/login_register_animation.mp4');

export const RegisterScreen = () => {
  const { register, isLoading } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Background Register Wallpaper
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    try {
      await register(name, email, password);
      Alert.alert('Sucesso', 'Conta criada com sucesso! Faça login para continuar.', [
        { text: 'OK', onPress: () => router.navigate('/(auth)/login') }
      ]);
    } catch (error: any) {
      Alert.alert('Erro no Cadastro', error.message);
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
          <View className="flex-1 flex-col justify-center items-center p-6 md:p-12">
            <View className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">

              <View className="items-center mb-8">
                <LinceIcon size={56} />
                <Text className="text-2xl lg:text-3xl font-bold text-gray-800 mt-4 text-center">
                  Criar Conta
                </Text>
                <Text className="text-gray-500 text-center text-sm mt-1 mb-2">
                  Junte-se ao Supre e otimize seu controle de estoque hoje mesmo.
                </Text>
              </View>

              <InputField label="Nome Completo" placeholder="João Silva" value={name} onChangeText={setName} />
              <InputField label="E-mail" placeholder="joao@exemplo.com" keyboardType="email-address" autoCapitalize="none" value={email} onChangeText={setEmail} />
              <InputField label="Senha" placeholder="Crie uma senha forte" secureTextEntry value={password} onChangeText={setPassword} />
              <InputField 
                label="Confirmar Senha" 
                placeholder="Repita a senha" 
                secureTextEntry 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                onSubmitEditing={handleRegister}
                returnKeyType="send"
              />

              <Button label="Cadastrar" className="mt-4" isLoading={isLoading} onPress={handleRegister} />

              <View className="flex-row justify-center mt-6">
                <Text className="text-gray-500">Já possui conta? </Text>
                <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
                  <Text className="text-blue-800 font-bold">Fazer Login</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

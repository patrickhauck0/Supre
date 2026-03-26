import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { LinceIcon } from '../components/ui/LinceIcon';

const videoSource = require('../../assets/videos/login_register_animation.mp4');

export const LoginScreen = () => {
  // Background Login Wallpaper
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

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
              />

              <InputField
                label="Senha"
                placeholder="••••••••"
                secureTextEntry
              />

              <View className="w-full items-end mb-6 -mt-2">
                <TouchableOpacity>
                  <Text className="text-blue-800 font-bold text-sm">Esqueceu a senha?</Text>
                </TouchableOpacity>
              </View>

              <Button label="Entrar" onPress={() => console.log('Login clicked')} />

              <View className="flex-row items-center mt-6">
                <Text className="text-gray-500">Não tem uma conta? </Text>
                <TouchableOpacity>
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

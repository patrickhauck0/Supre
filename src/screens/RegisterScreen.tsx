import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/ui/Button';
import { InputField } from '../components/ui/InputField';
import { LinceIcon } from '../components/ui/LinceIcon';

const videoSource = require('../../assets/videos/login_register_animation.mp4');

export const RegisterScreen = () => {
  // Background Register Wallpaper
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

              <InputField label="Nome Completo" placeholder="João Silva" />
              <InputField label="E-mail" placeholder="joao@exemplo.com" keyboardType="email-address" autoCapitalize="none" />
              <InputField label="Senha" placeholder="Crie uma senha forte" secureTextEntry />
              <InputField label="Confirmar Senha" placeholder="Repita a senha" secureTextEntry />

              <Button label="Cadastrar" className="mt-4" />

              <View className="flex-row justify-center mt-6">
                <Text className="text-gray-500">Já possui conta? </Text>
                <TouchableOpacity>
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

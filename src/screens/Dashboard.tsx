import { useVideoPlayer, VideoView } from 'expo-video';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { AlertCard } from '../components/ui/AlertCard';
import { Card } from '../components/ui/Card';
import { LinceIcon } from '../components/ui/LinceIcon';
import { useAuthStore } from '../store/authStore';

const videoSource = require('../../assets/videos/login_register_animation.mp4');

export const Dashboard = () => {
  const { user } = useAuthStore();

  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.muted = true;
  });

  useEffect(() => {
    player.play();
  }, [player]);

  return (
    <ScrollView className="flex-1 bg-slate-50" contentContainerStyle={{ paddingBottom: 40, alignItems: 'center' }}>
      {/* Header */}
      <View className="w-full border-b border-gray-200 overflow-hidden relative">
        <View style={StyleSheet.absoluteFillObject}>
          <VideoView
            style={{ width: '100%', height: '100%' }}
            player={player}
            allowsFullscreen={false}
            allowsPictureInPicture={false}
            nativeControls={false}
            contentFit="cover"
          />
          <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(255, 255, 255, 0.75)' }]} />
        </View>

        <View className="w-full flex-row items-center justify-between px-5 pt-4 pb-4 md:px-8 md:pt-4">
          <View className="flex-row items-center cursor-pointer">
            <LinceIcon size={44} />
          </View>
          <View className="flex-row items-center gap-3">
            {/* Avatar */}
            {user?.avatarUrl ? (
              <Image source={{ uri: user.avatarUrl }} className="w-10 h-10 rounded-full" contentFit="cover" />
            ) : (
              <View className="w-10 h-10 rounded-full bg-blue-800 items-center justify-center">
                <Text className="text-white font-bold text-lg">{user?.name ? user.name.charAt(0).toUpperCase() : '?'}</Text>
              </View>
            )}
            <TouchableOpacity className="bg-white/80 border border-gray-200 p-2.5 rounded-full">
              <Text className="text-lg leading-none">🔔</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="px-5 mt-6 w-full max-w-6xl md:px-10">
        <Text className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Olá, {user?.name?.split(' ')[0] || 'Usuário'}!</Text>
        <Text className="text-gray-500 mb-6 text-base">Aqui está o resumo do seu estoque hoje.</Text>

        {/* Alert */}
        <AlertCard
          title="Itens Críticos"
          description="Você tem 3 produtos com estoque abaixo do mínimo. Verifique a tela de reposição."
          type="error"
        />

        {/* Metrics */}
        <View className="flex-col md:flex-row md:justify-between mt-2 gap-4">
          {/* Card - 1 */}
          <View className="w-full md:flex-1">
            <Card>
              <View className="w-10 h-10 rounded-full bg-blue-50 items-center justify-center mb-3">
                <Text className="text-blue-800">📦</Text>
              </View>
              <Text className="text-gray-500 text-sm font-medium mb-1">Total em Estoque</Text>
              <Text className="text-3xl font-bold text-gray-800">1.240</Text>
              <Text className="text-emerald-600 text-sm mt-3 font-bold bg-emerald-50 self-start px-2 py-1 rounded">↑ 12% este mês</Text>
            </Card>
          </View>

          {/* Card - 2 */}
          <View className="w-full md:flex-1">
            <Card>
              <View className="w-10 h-10 rounded-full bg-red-50 items-center justify-center mb-3">
                <Text className="text-red-600 font-bold">!</Text>
              </View>
              <Text className="text-gray-500 text-sm font-medium mb-1">Itens Críticos</Text>
              <Text className="text-3xl font-bold text-red-600">3</Text>
              <Text className="text-gray-500 text-sm mt-3 font-medium bg-slate-100 self-start px-2 py-1 rounded">Requer atenção</Text>
            </Card>
          </View>

          {/* Card - 3*/}
          <View className="w-full md:flex-1">
            <Card className="bg-blue-800 border-0">
              <View className="w-10 h-10 rounded-full bg-yellow-500 items-center justify-center mb-3">
                <Text className="text-white text-lg">$</Text>
              </View>
              <Text className="text-gray-500 text-sm font-medium mb-1">Valor Estimado</Text>
              <Text className="text-3xl font-bold text-black">R$ 48.5K</Text>
              <Text className="text-gray-500 text-sm mt-3 font-medium">Custo de mercadoria</Text>
            </Card>
          </View>
        </View>

        {/* Recent Activity */}
        <View className="mt-8">
          <View className="flex-row justify-between items-end mb-4">
            <Text className="text-lg md:text-xl font-bold text-gray-800">Atividade Recente</Text>
            <TouchableOpacity><Text className="text-blue-800 font-bold text-sm">Ver tudo</Text></TouchableOpacity>
          </View>

          <Card className="p-0 overflow-hidden">
            <View className="p-4 border-b border-gray-100 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-emerald-100 items-center justify-center mr-3">
                  <Text className="text-emerald-700 font-bold">↓</Text>
                </View>
                <View>
                  <Text className="font-bold text-gray-800 text-base">MacBook Pro M3</Text>
                  <Text className="text-gray-500 text-sm mt-0.5">Entrada • Hoje, 10:30</Text>
                </View>
              </View>
              <Text className="text-emerald-600 font-bold text-base">+10</Text>
            </View>

            <View className="p-4 flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="w-10 h-10 rounded-full bg-red-100 items-center justify-center mr-3">
                  <Text className="text-red-700 font-bold">↑</Text>
                </View>
                <View>
                  <Text className="font-bold text-gray-800 text-base">Teclado Mecânico</Text>
                  <Text className="text-gray-500 text-sm mt-0.5">Saída • Hoje, 09:15</Text>
                </View>
              </View>
              <Text className="text-red-600 font-bold text-base">-2</Text>
            </View>
          </Card>
        </View>
      </View>
    </ScrollView>
  );
};

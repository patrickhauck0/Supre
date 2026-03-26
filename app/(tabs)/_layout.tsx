import { FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useWindowDimensions } from 'react-native';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#1E40AF',
      tabBarInactiveTintColor: '#94A3B8',
      tabBarShowLabel: isDesktop,
      tabBarStyle: {
        height: isDesktop ? 64 : 42,
        paddingBottom: isDesktop ? 8 : 0,
      },
      tabBarItemStyle: {
        justifyContent: 'center',
        paddingTop: isDesktop ? 4 : 0,
      }
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <FontAwesome5 name="home" size={22} color={color} /> }} />
      <Tabs.Screen name="products" options={{ title: 'Produtos', tabBarIcon: ({ color }) => <FontAwesome5 name="box-open" size={22} color={color} /> }} />
      <Tabs.Screen name="movements" options={{ title: 'Extrato', tabBarIcon: ({ color }) => <FontAwesome5 name="exchange-alt" size={22} color={color} /> }} />
      <Tabs.Screen name="reports" options={{ title: 'Relatórios', tabBarIcon: ({ color }) => <FontAwesome5 name="chart-bar" size={22} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil', tabBarIcon: ({ color }) => <FontAwesome5 name="user-alt" size={22} color={color} /> }} />
    </Tabs>
  );
}

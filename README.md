# Supre — Controle de Estoque [EM DESENVOLVIMENTO] 📦

Aplicativo mobile de **controle de estoque** desenvolvido com React Native + Expo, voltado para pequenos e médios negócios. O projeto ainda está em fase de construção de UI e integração com backend.

![Supre Logo](https://raw.githubusercontent.com/patrickhauck0/supre/main/assets/supre_logo.svg)

---

## Funcionalidades (em desenvolvimento)

| Tela | Status |
|---|---|
| Splash / Onboarding | ✅ Layout criado |
| Login | ✅ Layout criado |
| Cadastro | ✅ Layout criado |
| Dashboard (visão geral do estoque) | ✅ Layout criado |
| Lista de Produtos | ✅ Layout criado |
| Cadastro / Edição de Produto | ✅ Layout criado |
| Extrato de Movimentações | ✅ Layout criado |
| Relatórios | ✅ Layout criado |
| Perfil do usuário | ✅ Layout criado |
| Alertas por WhatsApp | 🔜 Planejado |
| Relatórios com IA | 🔜 Planejado |
| Integração Supabase (auth + dados) | 🔜 Planejado |

---

## Stack Tecnológica

- **[Expo](https://expo.dev/)** `~54` — base do projeto mobile (React Native)
- **[Expo Router](https://expo.github.io/router/)** `~6` — roteamento baseado em arquivos
- **[NativeWind](https://www.nativewind.dev/)** `^4` — estilização com classes Tailwind no React Native
- **[Zustand](https://zustand-demo.pmnd.rs/)** `^5` — gerenciamento de estado global
- **[Supabase JS](https://supabase.com/docs/reference/javascript/)** `^2` — backend (auth, banco de dados, storage)
- **[React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)** `~4` — animações nativas
- **[Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/)** — notificações push
- **[Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)** — upload de imagens de produtos
- **TypeScript** — tipagem estática em todo o projeto

## Stack AI

- **[n8n](https://n8n.io/)** `^1` — automação de fluxos de trabalho
- **[OpenAI](https://openai.com/)** `^4` — modelos de IA

---

## Design System

Os tokens de design ficam centralizados em `src/constants/designTokens.ts`:

| Token | Valor |
|---|---|
| `primary` | `#1E40AF` |
| `success` | `#10B981` |
| `alert` | `#EF4444` |
| `background.main` | `#F8FAFC` |
| `background.card` | `#FFFFFF` |
| `border` | `#E5E7EB` |

---

## Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) — `npm install -g expo-cli`
- [Expo Go](https://expo.dev/go)

### Instalação

```bash
# 1. Clone o repositório
git clone https://github.com/patrickhauck0/supre.git
cd supre

# 2. Instale as dependências
npm install

# 3. Inicie o servidor (com limpeza de cache de preferência)
npx expo start -c
```

Após rodar o comando, escaneie o QR Code pelo **Expo Go** ou pressione:
- `a` — abrir no emulador Android
- `i` — abrir no simulador iOS
- `w` — abrir no navegador (web)

---

## Próximos Passos

- [ ] Integrar autenticação com Supabase (login + registro)
- [ ] Criar store Zustand (gerenciar lista de produtos carregada do banco ou informações do usuário, por exemplo)
- [ ] Implementar operações CRUD completas de produtos via Supabase
- [ ] Implementar registro de entradas e saídas de estoque
- [ ] Configurar notificações push (alertas de estoque baixo)
- [ ] Integrar alertas via WhatsApp (utilizando n8n)
- [ ] Gerar relatórios com IA (utilizando n8n)

---

## Autor

**Patrick Hauck** — Projeto de portfólio pessoal.
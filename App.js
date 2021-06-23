import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

const MyComponent = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Clique no Botão azul e saiba mais informações sobre o IFAL Campus
          Palmeira dos Índios
        </Text>
        <Text style={styles.textStyle}>
          Clique no botão de ação para executar
        </Text>
        <Image
          source={{
            uri:
              'https://www2.ifal.edu.br/campus/palmeira/comunicacao/arquivos/logos-do-ifal-vertical.png/@@images/ac3e97aa-6806-4523-bc47-7bf3c0950b0f.png',
          }}
          style={styles.logoifal}
        />
      </View>
      <Provider>
        <Portal>
          <FAB.Group
            open={open}
            icon={open ? 'calendar-today' : 'plus'}
            actions={[
              {
                icon: 'book-outline',
                label: 'Cursos',
                onPress: () =>
                  alert(
                    'No IFAL temos os cursos Técnicos em Informática, Edificações, Eletrotécnica e Segurança do Trabalho.'
                  ),
              },
              {
                icon: 'email',
                label: 'Fale com o IFAL',
                onPress: () => alert('direcao@ifalpalmeira.edu.br'),
              },
              {
                icon: 'school-outline',
                label: 'Sobre o IFAL',
                onPress: () =>
                  alert(
                    'O campus Palmeira dos Índios foi inaugurado em 2 de agosto de 1993 e é um centro de referência de ensino técnico profissionalizante na região do agreste, atuando junto aos sistemas estaduais, municipais e outras agências de formação profissional.'
                  ),
                small: false,
              },
            ]}
            onStateChange={onStateChange}
            onPress={() => {
              if (open) {
              }
            }}
          />
        </Portal>
      </Provider>
    </SafeAreaView>
  );
};

export default MyComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    color: 'white',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  logoifal: {
    resizeMode: 'full',
    width: 200,
    height: 200,
    left: 50,
  },
});

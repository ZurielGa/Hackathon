import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image } from 'expo-image';
import i18n from '../../constants/i18n';

export default function HomeScreen() {

  const router = useRouter();
  const [language, setLanguage] = useState('es');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  i18n.locale = language;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Selector idioma (como lo tenías) */}
      <View style={styles.langContainer}>
        <Pressable onPress={() => changeLanguage('es')}>
          <Text style={[
            styles.langBtn,
            language === 'es' && styles.activeLang
          ]}>
            🇲🇽 ES
          </Text>
        </Pressable>

        <Pressable onPress={() => changeLanguage('en')}>
          <Text style={[
            styles.langBtn,
            language === 'en' && styles.activeLang
          ]}>
            🇺🇸 EN
          </Text>
        </Pressable>
      </View>

      {/* Título */}
      <Text style={styles.title}>
        🌮 {i18n.t('welcome')}
      </Text>

      <Text style={styles.subtitle}>
        {i18n.t('subtitle')}
      </Text>

      {/* DESAYUNO con imagen */}
      <Pressable 
        style={styles.card} 
        onPress={() => router.push('/desayuno')}
      >
        <Image
          source={require('../../assets/images/desayuno.jpg')}
          style={styles.cardImage}
          contentFit="cover"
        />
        <Text style={styles.cardText}>
          🍳 {i18n.t('breakfast')}
        </Text>
      </Pressable>

      {/* BOTONES normales */}
      <Pressable style={styles.button} onPress={() => router.push('/comida')}>
        <Text style={styles.buttonText}>
          🌮 {i18n.t('lunch')}
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/cena')}>
        <Text style={styles.buttonText}>
          🌙 {i18n.t('dinner')}
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/postres')}>
        <Text style={styles.buttonText}>
          🍰 {i18n.t('desserts')}
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => router.push('/antojitos')}>
        <Text style={styles.buttonText}>
          🌮 {i18n.t('snacks')}
        </Text>
      </Pressable>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8fafc'
  },

  langContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    gap: 20,
    marginBottom: 20
  },

  langBtn: {
    fontSize: 16,
    color: '#94a3b8'
  },

  activeLang: {
    color: '#38bdf8',
    fontWeight: 'bold'
  },

  title: {
    fontSize: 26,
    color: '#fa1d15',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8
  },

  subtitle: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 30
  },

  /* Tarjeta desayuno */
  card: {
    width: 280,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 20,
    elevation: 6
  },

  cardImage: {
    width: '100%',
    height: 170,
  },

  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 15,
    color: '#1e293b'
  },

  /* Botones normales */
  button: {
    backgroundColor: '#1e293b',
    padding: 14,
    marginTop: 12,
    borderRadius: 12,
    width: 240,
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600'
  }
});
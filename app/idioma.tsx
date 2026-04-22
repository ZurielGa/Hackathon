import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { LanguageContext } from '../context/LanguageContext';

export default function Idioma() {
  const router = useRouter();
  const { changeLanguage, lang } = useContext(LanguageContext);

  const [selected, setSelected] = useState(lang);


  useEffect(() => {
    setSelected(lang);
  }, [lang]);

  const apply = () => {
    changeLanguage(selected);
    router.back();
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modal}>
        <Text style={styles.title}>🌍 Idioma / Language</Text>

        <Pressable
          style={[styles.option, selected === 'es' && styles.active]}
          onPress={() => setSelected('es')}
        >
          <Text style={selected === 'es' ? styles.activeText : null}>
            🇲🇽 Español
          </Text>
        </Pressable>

        <Pressable
          style={[styles.option, selected === 'en' && styles.active]}
          onPress={() => setSelected('en')}
        >
          <Text style={selected === 'en' ? styles.activeText : null}>
            🇺🇸 English
          </Text>
        </Pressable>

        <Pressable style={styles.button} onPress={apply}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>
            Aplicar
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    width: '80%',
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
  },
  option: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
    alignItems: 'center'
  },
  active: {
    borderColor: '#007AFF',
    backgroundColor: '#e7f2ff'
  },
  activeText: {
    color: '#007AFF',
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  }
});
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import i18n from '../constants/i18n';

export const useT = () => {
  // Esta línea es OBLIGATORIA para que el hook detecte el cambio de estado
  const { lang } = useContext(LanguageContext);

  // Retornamos la función que usa el locale actualizado
  return (key: string) => i18n.t(key);
};
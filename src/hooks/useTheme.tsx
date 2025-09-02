import { useContext } from 'react';
import { ThemeContext } from '../components/common/ThemeContext'; // Importa el contexto

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme debe ser usado dentro de un ThemeProvider');
  }
  return context;
};
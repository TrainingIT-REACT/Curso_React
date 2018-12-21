import { createContext } from 'react';

export const fontSizes = {
  small: 14,
  medium: 16,
  big: 18,
};

// Creamos el contexto para gestionar el tamaño de la fuente de letra
export const AccessibilityContext = createContext({
  fontSize: 16,
  updateFontSize: () => {}
});

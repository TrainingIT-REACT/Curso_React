import { createContext } from 'react';

export const fontSizes = {
  small: 14,
  medium: 18,
  big: 24,
};

// Creamos el contexto para gestionar el tamaño de la fuente de letra
export const AccessibilityContext = createContext({
  fontSize: fontSizes.medium,
  updateFontSize: () => {}
});

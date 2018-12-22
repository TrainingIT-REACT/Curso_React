import React from 'react';

// Contexto
import { AccessibilityContext, fontSizes } from '../contexts/Accesibility';

class FontSizeSelector extends React.Component {
  render() {
    return <AccessibilityContext.Consumer>
      {({ fontSize, updateFontSize }) => {
        console.log(fontSize);
        return Object.keys(fontSizes).map(size => {
          const value = fontSizes[size];
          const css = `button ${value === fontSize ? 'button-primary' : ''}`;
          return <button key={size} onClick={ () => updateFontSize(value)}
            className={css} style={{fontSize: `${value}px`}}>
            A
          </button>
        });
      }}
    </AccessibilityContext.Consumer>
  }
}

export default FontSizeSelector;

import React from 'react';

import { AccessibilityContext } from './contexts/Accesibility';

const Definition = () => {
  return <AccessibilityContext.Consumer>
    { ({ fontSize }) => {
      return <p style={{fontSize: `${fontSize}px`}}>
        React makes it painless to create interactive UIs. Design
        simple views for each state in your application, and React
        will efficiently update and render just the right components
        when your data changes.
      </p>
    }}
  </AccessibilityContext.Consumer>;
};

export default Definition;

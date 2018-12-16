import React, { Fragment } from 'react';

const Glossary = ({ terms }) => (
  <dl>
    {terms.map(t => {
      return (
        <Fragment key={t.term}>
          <dt>{t.term}</dt>
          <dd>{t.definition}</dd>
        </Fragment>
      );
    })}
  </dl>
);

export default Glossary;

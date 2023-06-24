import React from 'react';
import FormContext from '.';

const Provider = ({ setShowForm, children }) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <FormContext.Provider value={{ setShowForm }}>
    {children}
  </FormContext.Provider>
);

export default Provider;

import React from 'react';
import FormContext from '.';

const Provider = ({
  setShowForm, children, editBtnText, deleteBtnText,
}) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <FormContext.Provider value={{ setShowForm, editBtnText, deleteBtnText }}>
    {children}
  </FormContext.Provider>
);

export default Provider;

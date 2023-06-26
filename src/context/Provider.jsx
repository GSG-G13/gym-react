import React from 'react';
import FormContext from '.';

const Provider = ({
  setShowForm, children, editBtnText, deleteBtnText, showForm,
}) => (
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  <FormContext.Provider value={{
    setShowForm, editBtnText, deleteBtnText, showForm,
  }}
  >
    {children}
  </FormContext.Provider>
);

export default Provider;

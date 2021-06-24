import React, {useState} from 'react';

const formDataContext = React.createContext();

const FormDataProvider = (props) => {
  const [state, setState] = useState({});
  return (
    <formDataContext.Provider value={[state, setState]}>
      {props.children}
    </formDataContext.Provider>
  );
}

export { formDataContext, FormDataProvider };
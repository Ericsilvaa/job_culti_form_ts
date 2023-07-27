// context = store
// useReducer = reducers e actions
// Provider = provedor
// custom Hook = será os acessos a esse contexto

import { createContext, useContext, useReducer, ReactNode } from "react";
import { Action, ContextType, State } from "../types/TypesContext";
import { FormActions } from "../enum/FormActions";

const initialState: State = {
  currentStep: 0,
  name: "",
  level: 0,
  email: "",
  github: "",
};

// create context
// undefined: é recebido quando tentam acessar o contexto sem o component está envolvido
const FormContext = createContext<ContextType | undefined>(undefined);

// reducer
// uso interno
const FormReducer = (state: State, action: Action) => {
  switch (action.type) {
    case FormActions.setCurrentStep:
      return { ...state, currentStep: action.payload };
    case FormActions.setName:
      return { ...state, name: action.payload };
    case FormActions.setLevel:
      return { ...state, level: action.payload };
    case FormActions.setEmail:
      return { ...state, email: action.payload };
    case FormActions.setGithub:
      return { ...state, github: action.payload };
    default:
      return state;
  }
};

type FormProviderProps = {
  children: ReactNode;
};

// provider -> usa o reducer
const FormProvider = ({ children }: FormProviderProps) => {
  // consumindo reducer
  const [state, dispatch] = useReducer(FormReducer, initialState);
  const value = { state, dispatch };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

// poderia está em um file called Hooks
// custom Hook
const useForm = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error(
      "useForm está sendo utilizado fora da cobertura do context"
    );
  return context;
};

export { FormProvider, useForm };

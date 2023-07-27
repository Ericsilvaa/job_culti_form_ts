import React, { ChangeEvent, useEffect } from "react";
import * as C from "./styles";
import Theme from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { FormActions } from "../../enum/FormActions";

type Props = {};

const FormStep1 = (props: Props) => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, []);

  const handleNextStep = () => {
    return state.name
      ? navigate("/step2")
      : alert("Preencha o campo corretamente");
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setName, payload: e.target.value });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome</p>

        <hr />

        {/* campo */}
        <label>
          Seu nome completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep1;

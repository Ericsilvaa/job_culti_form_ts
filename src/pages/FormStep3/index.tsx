import React, { ChangeEvent, useEffect } from "react";
import * as C from "./styles";
import Theme from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { FormActions } from "../../enum/FormActions";
import { Link } from "react-router-dom";

type Props = {};

const FormStep3 = (props: Props) => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (!state.name) {
      navigate("/");
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
   return state.email && state.github ? console.log(state) : alert('Preencha os dados!')
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setEmail, payload: e.target.value });
  };

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: FormActions.setGithub, payload: e.target.value });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 3/3</p>
        <h1>Legal, {state.name}, onde te achamos</h1>
        <p>Preencha os dados, para entrar em contato</p>

        <hr />

        {/* campo */}
        <label>
          Qual seu email ?
          <input type="emal" value={state.email} onChange={handleEmailChange} />
        </label>
        <label>
          Qual seu Github?
          <input type="url" value={state.github} onChange={handleGithubChange} />
        </label>
        <Link className="backButton" to='/step2'>Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep3;

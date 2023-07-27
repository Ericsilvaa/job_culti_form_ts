import React, { ChangeEvent, useEffect } from "react";
import * as C from "./styles";
import Theme from "../../components/Theme";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../contexts/FormContext";
import { FormActions } from "../../enum/FormActions";
import SelectOption from "../../components/SelectOption";
import { Link } from "react-router-dom";

type Props = {};

const FormStep2 = (props: Props) => {
  const navigate = useNavigate();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if(!state.name) return navigate('/step1')
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2,
    });
  }, []);

  const handleNextStep = () => {
    return state.name
      ? navigate("/step3")
      : alert("Preencha o campo corretamente");
  };

  const setLevel = (level: number) => {
    console.log("sendo clicado");
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>{state.name}, o que melhor descreve você?</h1>
        <p>Escolha a opção que melhor condiz com seu estado atual...</p>

        <hr />

        {/* campo */}
        <SelectOption
          title={"Sou Iniciante"}
          description={""}
          icon={""}
          selected={state.level === 0}
          onClick={() => setLevel(0)}
        />
        <SelectOption
          title={"Sou Desenvolvedor"}
          description={""}
          icon={""}
          selected={state.level === 1}
          onClick={() => setLevel(1)}
        />
        <Link className="backButton" to='/'>Voltar</Link>
        <button onClick={handleNextStep}>Proximo</button>
      </C.Container>
    </Theme>
  );
};

export default FormStep2;

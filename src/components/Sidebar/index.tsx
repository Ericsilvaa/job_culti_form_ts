import React from "react";
import { SidebarItem } from "./SidebarItem";
import { useForm } from "../../contexts/FormContext";

type Props = {};

const Sidebar = (props: Props) => {
  const { state } = useForm();

  return (
    <div>
      <SidebarItem
        title="Pessoal"
        description="Se identifique"
        icon="profile"
        path="/"
        active={state.currentStep === 1}
      />

      <SidebarItem
        title="Profissional"
        description="Seu nível"
        icon="book"
        path="/step2"
        active={state.currentStep === 2}
      />

      <SidebarItem
        title="Contatos"
        description="Como te achar"
        icon="mail"
        path="/step3"
        active={state.currentStep === 3}
      />
    </div>
  );
};

export default Sidebar;

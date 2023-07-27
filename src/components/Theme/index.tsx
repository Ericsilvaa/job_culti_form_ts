// * component que serve como tema principal do site
// import { Outlet } from "react-router-dom";
import React, { ReactNode } from "react";
import * as C from "./styles";
// import { useForm } from "../../contexts/FormContext";

import Header from "../Header";
import Sidebar from "../Sidebar";
// import { SidebarItem } from "../SidebarItem";

type Props = {
  children: ReactNode;
};

const Theme = ({ children }: Props) => { 
  // const { state } = useForm();

  return (
    <C.Container>
      <C.Area>
        <Header />

        <C.Steps>
          <C.Sidebar>
            {/* colocar sidebar em apenas um component */}
            <Sidebar />
            {/* <SidebarItem
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
            /> */}
          </C.Sidebar>
          <C.Page>{children}</C.Page>
        </C.Steps>
      </C.Area>
    </C.Container>
  );
};

export default Theme;

// realizar troca do children por Outlet

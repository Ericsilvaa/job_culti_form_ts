import { FormActions } from "../enum/FormActions";

export type State = {
  currentStep: number,
  name: string,
  level: 0 | 1,
  email: string,
  github: string,
}

export type Action = {
  type: FormActions,
  payload: any;
}

export type ContextType = {
  state: State,
  dispatch: (action: Action) => void
}
import { BrowserRouter } from "react-router-dom";

// Components
import { FormProvider } from "./contexts/FormContext";
// Router
import Routespage from "./routes";

// Style
import * as C from "./App.styles";

function App() {
  return (
    <FormProvider>
      <C.Container>
        <BrowserRouter>
          <Routespage />
        </BrowserRouter>
      </C.Container>
    </FormProvider>
  );
}

export default App;

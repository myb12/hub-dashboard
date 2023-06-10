import "./App.css";
import { StyledEngineProvider } from "@mui/material";
import Routes from "./routes";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Routes />
    </StyledEngineProvider>
  );
}

export default App;

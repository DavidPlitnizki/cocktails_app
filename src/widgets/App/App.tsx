import { Header } from "../Header";
import { BrowserRouter } from "react-router";
import { RoutesConfig } from "../../routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
    </BrowserRouter>
  );
};

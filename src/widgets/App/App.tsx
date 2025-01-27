import { Header } from "../Header/Header";
import { BrowserRouter } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import RoutesConfig from "../../routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <RoutesConfig />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </BrowserRouter>
  );
};

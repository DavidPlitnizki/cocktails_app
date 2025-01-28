import { BrowserRouter } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import { Header } from "../Header/Header";
import RoutesConfig from "../../routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Header />
        <RoutesConfig />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          theme="light"
          transition={Bounce}
        />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

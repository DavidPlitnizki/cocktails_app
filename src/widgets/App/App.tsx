import { Header } from "../Header/Header";
import { BrowserRouter } from "react-router";
import { Bounce, ToastContainer } from "react-toastify";
import RoutesConfig from "../../routes/Routes";
import { ErrorBoundary } from "react-error-boundary";

export const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
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
      </ErrorBoundary>
    </BrowserRouter>
  );
};

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { PersistGate } from "redux-persist/lib/integration/react";
import { getPersistor } from "@rematch/persist";
import { Suspense } from "react";
import store from "./react-redux";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Suspense>
          <Provider store={store}>
            <PersistGate loading={null} persistor={getPersistor()}>
              <QueryClientProvider client={queryClient}>
                <ToastContainer />
                <App />
              </QueryClientProvider>
            </PersistGate>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

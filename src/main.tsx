import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App } from "./App";
import { I18nProvider } from "./lib/i18n";
import "./styles.css";

const queryClient = new QueryClient();

// Must match the Vite `base` (without trailing slash for react-router).
const basename = "/demo-barber";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={basename}>
        <I18nProvider>
          <App />
        </I18nProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
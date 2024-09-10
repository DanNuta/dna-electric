import React from "react";

import { WishlistContextProvider, ProductsProvider } from "context";

import ReactDOM from "react-dom/client";
import App from "./App";
import { NavbarProvider } from "./context/Context.navbar";

import { ThemeProvider } from "./layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <ProductsProvider>
      <WishlistContextProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </WishlistContextProvider>
    </ProductsProvider>
  </ThemeProvider>
);

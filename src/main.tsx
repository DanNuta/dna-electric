import React from "react";

import { WishlistContextProvider } from "context";

import ReactDOM from "react-dom/client";
import App from "./App";
import { NavbarProvider } from "./context/Context.navbar";
import { ProductsContext } from "./context/Context.products";

import { ThemeProvider } from "./layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <ProductsContext>
      <WishlistContextProvider>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </WishlistContextProvider>
    </ProductsContext>
  </ThemeProvider>
);

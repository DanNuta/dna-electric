import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import { NavbarProvider } from "./context/Context.navbar";
import { WislistContext } from "./context/Context.wishlist";
import { ProductsContext } from "./context/Context.products";

import { ThemeProvider } from "./layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <ProductsContext>
      <WislistContext>
        <NavbarProvider>
          <App />
        </NavbarProvider>
      </WislistContext>
    </ProductsContext>
  </ThemeProvider>
);

import React from "react";

import { Shop } from "pages";
import { useProductsContext } from "hooks";

import { HomeView } from "./pages/Home/Home.view";
import { Navbar } from "./components/Navbar/Navbar";
import { VFooter } from "./components/VFooter/VFooter";
import { GlobalStyles } from "./components/styles/Global.module";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Contact } from "./pages/Contact/Contact";
import { Impamantare } from "./pages/Impamantare/Impamantare";
import { useContext } from "react";
import { NavbarContext } from "./context/Context.navbar";
import { Products } from "./pages/Products/Products";
import { Supratensiuni } from "./pages/Supratensiuni/Supratensiuni";
import { Paratrasnet } from "./pages/Paratrasnet/Paratrasnet";
import { ScrollToTop } from "./components/VScroll/VScroll";
import { NavbarContextModel } from "./models/NavbarContext.model";
import { NotFount } from "./pages/NotFound/NotFound.view";

const App: React.FC = () => {
  const { data } = useContext(NavbarContext) as NavbarContextModel;
  const { impamantare, paratrasnet, supratensiune } = useProductsContext();

  return (
    <BrowserRouter>
      <ScrollToTop>
        <>
          <Navbar bg="#272727" />

          <GlobalStyles />

          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/impamantare" element={<Impamantare />} />

            <Route
              path="/supratensiune"
              element={<Supratensiuni products={supratensiune} />}
            />
            <Route
              path="/paratrasnet"
              element={<Paratrasnet products={paratrasnet} />}
            />
            <Route
              path={`/${data.impamantare}/:id`}
              element={
                <Products
                  link={data.impamantare}
                  products={impamantare.data}
                  collection="IMPAMANTARE"
                />
              }
            />
            <Route
              path={`/${data.supratensiune}/:id`}
              element={
                <Products
                  link={data.supratensiune}
                  products={supratensiune.data}
                  collection="SUPRATENSIUNI"
                />
              }
            />
            <Route
              path={`/${data.paratrasnet}/:id`}
              element={
                <Products
                  link={data.paratrasnet}
                  products={paratrasnet.data}
                  collection="PARATRASNET"
                />
              }
            />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<NotFount />} />
          </Routes>

          <VFooter />
        </>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;

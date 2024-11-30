import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import appSotre from "./utils/appStore";
import { Provider } from "react-redux";



const AppLayout = () => {
  return (
    <Provider store={appSotre}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};


export default AppLayout;

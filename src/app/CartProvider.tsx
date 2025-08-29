"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
};

export default CartProvider;

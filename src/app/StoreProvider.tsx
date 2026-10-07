"use client";

import { useState } from "react";
import { Provider } from "react-redux";
import { makeStore } from "@/lib/store";

type StoreProviderProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  // Lazy initialiser: the store is created once per mount, never re-created.
  const [store] = useState(makeStore);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;

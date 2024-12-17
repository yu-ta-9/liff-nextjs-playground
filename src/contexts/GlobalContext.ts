"use client";

import { Liff } from "@line/liff";
import { createContext } from "react";

type GlobalContextType = {
  liff: Liff | null;
  liffError: string | null;
};

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

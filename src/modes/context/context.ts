import { Mode } from "modes/types/types";
import { createContext, useContext } from "react";

export const ModeContext = createContext<Mode>({} as any);
export const useMode = () => useContext(ModeContext);

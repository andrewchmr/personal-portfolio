import { createContext } from "react";

interface IContext {
    linkHovered: boolean;
    setLinkHovered: (isLinkHovered: boolean) => void;
}

export const AppContext = createContext<Partial<IContext>>({});
import { createContext } from "react";

interface IContext {
    menuOpen: boolean;
    setMenuOpen: (isOpen: boolean) => void;
    linkHovered: boolean;
    setLinkHovered: (isLinkHovered: boolean) => void;
}

export const AppContext = createContext<Partial<IContext>>({});
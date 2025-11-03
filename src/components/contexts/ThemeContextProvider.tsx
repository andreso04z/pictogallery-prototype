import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type ThemeContextType } from "./ThemeContext";

type ThemeContextProviderProps = {
  children: ReactNode;
};

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const value: ThemeContextType = {
    isDark: isDark,
    setIsDark: setIsDark,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

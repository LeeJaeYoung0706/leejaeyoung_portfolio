'use client'
import {createContext, useCallback, useContext, useMemo, useState} from "react";
import {dark} from "@/styles/theme/dark";
import {pink} from "@/styles/theme/pink";
import {DefaultTheme, ThemeProvider} from "styled-components";

/**
 * Theme Handler Props Drilling 해결을 위해서 생성
 */
interface ThemeHandlerInterface {
  theme: DefaultTheme
  themeHandler: () => void
}

const ThemeHandlerContext: ThemeHandlerInterface = {
  theme: dark,
  themeHandler: () => {
  }
}

const ThemeContext = createContext<ThemeHandlerInterface | null>(null);

export function ThemeHandlerProvider({children}: { children: React.ReactNode }) {

  const [theme, setTheme] = useState<DefaultTheme>(ThemeHandlerContext.theme);

  const themeHandler = useCallback(() => {
    setTheme((pre) => {
      return pre === pink ? dark : pink
    });
  }, [theme])

  const value = useMemo(() => ({theme: theme, themeHandler: themeHandler}), [theme, themeHandler])

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>);
}

export function useThemeContext(): ThemeHandlerInterface {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}
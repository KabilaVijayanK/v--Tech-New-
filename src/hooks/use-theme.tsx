import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage on mount
    const stored = localStorage.getItem("theme") as Theme | null;
    const initial = stored || "dark";
    setTheme(initial);
    applyTheme(initial);
    setIsClient(true);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const html = document.documentElement;
    if (newTheme === "light") {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
      return newTheme;
    });
  };

  // Always provide context, but suppress rendering on server
  if (!isClient) {
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

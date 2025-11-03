import { useTheme } from "../hooks/useTheme";

export default function ThemeButton() {
  const { isDark, setIsDark } = useTheme();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="fixed top-4 right-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md"
    >
      Toggle {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

import { useEffect, useState } from "react";
import RoomsCard from "./components/RoomsCard";
import Layout from "./components/Layout";
import RoomContextProvider from "./components/contexts/RoomContextProvider";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Toggle {isDark ? "Light Mode" : "Dark Mode"}
      </button>

      <RoomContextProvider>
        <Layout>
          <RoomsCard />
        </Layout>
      </RoomContextProvider>
    </>
  );
}

export default App;

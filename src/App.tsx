import ThemeButton from "./components/ThemeButton";
import MainCard from "./components/MainCard";
import Layout from "./components/Layout";
import RoomContextProvider from "./components/contexts/RoomContextProvider";
import ThemeContextProvider from "./components/contexts/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeButton />
      </ThemeContextProvider>
      <Layout>
        <RoomContextProvider>
          <MainCard />
        </RoomContextProvider>
      </Layout>
    </>
  );
}

export default App;

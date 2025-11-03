import ThemeButton from "./components/ThemeButton";
import RoomsCard from "./components/RoomsCard";
import Layout from "./components/Layout";
import RoomContextProvider from "./components/contexts/RoomContextProvider";
import ThemeContextProvider from "./components/contexts/ThemeContextProvider";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeButton />
      </ThemeContextProvider>
      <RoomContextProvider>
        <Layout>
          <RoomsCard />
        </Layout>
      </RoomContextProvider>
    </>
  );
}

export default App;

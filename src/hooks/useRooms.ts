import { useContext } from "react";
import { RoomContext } from "../components/contexts/RoomContext";

export function useRooms() {
  const context = useContext(RoomContext);
  if (!context) throw new Error("useRooms must be used within a RoomContextProvider");
  return context;
}

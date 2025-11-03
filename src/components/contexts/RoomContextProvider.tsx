import { useState, type ReactNode } from "react";
import { mockRooms } from "../../lib/mock-data";
import { RoomContext, type RoomContextType } from "./RoomContext";

type RoomContextProviderProps = {
  children: ReactNode;
};

export default function RoomContextProvider({
  children,
}: RoomContextProviderProps) {
  const [rooms, setRooms] = useState(mockRooms);

  const value: RoomContextType = {
    rooms: rooms,
    setRooms: setRooms,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
}

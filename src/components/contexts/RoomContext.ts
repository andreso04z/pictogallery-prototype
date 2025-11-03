import { createContext } from "react";
import type { Room } from "../../types/room";

export type RoomContextType = {
  rooms: Room[];
  setRooms: React.Dispatch<React.SetStateAction<Room[]>>;
};

export const RoomContext = createContext<RoomContextType | null>(null);
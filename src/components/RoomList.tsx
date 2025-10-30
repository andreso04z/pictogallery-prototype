import { mockRooms } from "../lib/mock-data";
import RoomListItem from "./RoomListItem";

export default function RoomList() {
  return (
    <ul className="flex flex-col w-full overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {mockRooms.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No active rooms yet
        </div>
      ) : (
        mockRooms.map((room) => <RoomListItem key={room.id} room={room} />)
      )}
    </ul>
  );
}

import { useRooms } from "../../hooks/useRooms";
import RoomListItem from "./RoomListItem";

export default function RoomList() {
  const { rooms } = useRooms();
  return (
    <ul className="flex flex-col w-full overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {rooms.length === 0 ? (
        <div className="text-center py-8 px-4 text-muted-foreground text-sm">
          No active rooms yet
        </div>
      ) : (
        rooms.map((room) => <RoomListItem key={room.id} room={room} />)
      )}
    </ul>
  );
}

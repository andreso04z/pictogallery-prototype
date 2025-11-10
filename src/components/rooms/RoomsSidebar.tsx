import RoomList from "./RoomList";

export default function RoomsSidebar() {
  return (
    <div className="w-66 sm:70 md:w-80 border-r border-border">
      <div className="px-4">
        <h3 className="font-semibold text-sm text-muted-foreground mb-3">
          Rooms
        </h3>
      </div>
      <RoomList />
    </div>
  );
}

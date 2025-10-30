import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Separator } from "./ui/separator";
import RoomList from "./RoomList";
import CreateRoomButton from "./CreateRoomButton";

export default function RoomsCard() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle className="text-2xl">PictoGallery</CardTitle>
          <CardDescription>Active Drawing Rooms</CardDescription>
        </div>
        <CreateRoomButton />
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <RoomList />
      </CardContent>
    </Card>
  );
}

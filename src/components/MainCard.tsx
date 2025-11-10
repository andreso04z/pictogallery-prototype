import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import { Separator } from "./ui/separator";
import CreateRoomButton from "./CreateRoomButton";
import ChatView from "./ChatView";
import RoomsSidebar from "./rooms/RoomsSidebar";

export default function MainCard() {
  return (
    <Card className="w-full max-w-6xl">
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle className="text-2xl">PictoGallery</CardTitle>
          <CardDescription>Active Drawing Rooms</CardDescription>
        </div>
        <CreateRoomButton />
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <div className="flex">
          <RoomsSidebar />
          <div className="flex-1">
            <ChatView />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

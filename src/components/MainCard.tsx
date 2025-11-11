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
    <Card className="w-full h-190 xl:h-200 2xl:h-210 max-w-6xl lg:max-w-7xl flex flex-col">
      <CardHeader className="flex justify-between items-center shrink-0">
        <div>
          <CardTitle className="text-2xl">PictoGallery</CardTitle>
          <CardDescription>Active Drawing Rooms</CardDescription>
        </div>
        <CreateRoomButton />
      </CardHeader>
      <Separator className="shrink-0" />
      <CardContent className="p-0 flex-1 overflow-hidden">
        <div className="flex h-full">
          <RoomsSidebar />
          <div className="flex-1">
            <ChatView />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

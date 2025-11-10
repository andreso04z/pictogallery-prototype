import type { Room } from "../../types/room";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CardDescription, CardTitle } from "../ui/card";
import { formatTimeAgo } from "../../lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type RoomListItemProps = {
  room: Room;
};

export default function RoomListItem({ room }: RoomListItemProps) {
  return (
    <li className="px-4 py-3 hover:bg-accent transition-colors cursor-pointer border-b border-border last:border-b-0">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-start gap-3">
            <Avatar className="shrink-0 w-10 h-10">
              <AvatarImage src="" alt="avatar-image" />
              <AvatarFallback className="text-sm">{room.badge}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2 mb-1">
                <CardTitle className="text-sm font-semibold truncate">
                  {room.title}
                </CardTitle>
                <CardDescription className="text-xs shrink-0">
                  {formatTimeAgo(room.createdAt)}
                </CardDescription>
              </div>
              <CardDescription className="text-xs truncate">
                {room.username}
              </CardDescription>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent>{room.title}</TooltipContent>
      </Tooltip>
    </li>
  );
}

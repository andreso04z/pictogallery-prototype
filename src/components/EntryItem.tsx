import type { Entry } from "../types/entry";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CardDescription, CardTitle } from "./ui/card";
import { formatTimeAgo } from "../lib/utils";

type EntryItemProps = {
  entryItem: Entry;
};

export default function EntryItem({ entryItem }: EntryItemProps) {
  return (
    <li className="px-4 py-4 sm:px-6 hover:bg-accent transition-colors cursor-pointer">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <Avatar className="shrink-0">
            <AvatarImage src="" alt="avatar-image" />
            <AvatarFallback className="text-sm">
              {entryItem.badge}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col sm:flex-row sm:gap-4 sm:items-center min-w-0 flex-1">
            <CardTitle className="text-sm truncate">
              {entryItem.title}
            </CardTitle>
            <CardDescription className="text-xs truncate">
              {entryItem.username}
            </CardDescription>
          </div>
        </div>
        <div className="shrink-0">
          <CardDescription className="text-xs whitespace-nowrap">
            {formatTimeAgo(entryItem.createdAt)}
          </CardDescription>
        </div>
      </div>
    </li>
  );
}

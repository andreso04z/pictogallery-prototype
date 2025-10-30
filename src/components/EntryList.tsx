import { mockEntryItems } from "../lib/mock-data";
import EntryItem from "./EntryItem";

export default function EntryList() {
  return (
    <ul className="flex flex-col w-full overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {mockEntryItems.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No entries yet
        </div>
      ) : (
        mockEntryItems.map((item) => (
          <EntryItem key={item.id} entryItem={item} />
        ))
      )}
    </ul>
  );
}

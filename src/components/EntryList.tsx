import EntryItem from "./EntryItem";

export default function EntryList() {
  return (
    <ul className="flex flex-col w-full">
      <EntryItem />
      <EntryItem />
    </ul>
  );
}

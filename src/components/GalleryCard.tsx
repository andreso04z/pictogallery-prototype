import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import CreateButton from "./CreateButton";
import { Separator } from "./ui/separator";
import EntryList from "./EntryList";

export default function GalleryCard() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="flex justify-between items-center">
        <div>
          <CardTitle className="text-2xl">PictoGallery</CardTitle>
          <CardDescription>A Markup Prototype</CardDescription>
        </div>
        <CreateButton />
      </CardHeader>
      <Separator />
      <CardContent className="p-0">
        <EntryList />
      </CardContent>
    </Card>
  );
}

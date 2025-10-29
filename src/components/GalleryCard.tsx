import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import CreateButton from "./CreateButton";
import { Separator } from "./ui/separator";

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
      <CardContent>
        <ul className="flex flex-col gap-4">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            dolorum laborum quas delectus, vel dolorem dolores libero voluptatem
            ab molestiae sequi voluptates. Vero earum ipsa, tempore praesentium
            quos aliquid minus.
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum eum,
            obcaecati amet reprehenderit sit dolor praesentium ut laudantium,
            pariatur optio similique provident nemo magnam! Ipsam temporibus
            odio inventore dolorem ratione!
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}

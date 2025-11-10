import { useState, type ChangeEvent } from "react";
import { ArrowUpIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "./ui/input-group";
import { Separator } from "./ui/separator";
import { REMAINING_CHARACTERS } from "../lib/constants";
import { capitalize } from "../lib/utils";

export default function ChatForm() {
  const [text, setText] = useState("");
  const [messageType, setMessageType] = useState("text");
  const remainingCharacters = REMAINING_CHARACTERS - text.length;

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= REMAINING_CHARACTERS) setText(newText);
  };

  return (
    <form>
      <InputGroup>
        <InputGroupTextarea
          placeholder="Send a text message"
          value={text}
          onChange={handleChange}
        />
        <InputGroupAddon align="block-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">
                {capitalize(messageType)}
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem onClick={() => setMessageType("text")}>
                Text
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setMessageType("drawing")}>
                Drawing
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">
            {`${remainingCharacters} characters remaining`}
          </InputGroupText>
          <Separator orientation="vertical" className="h-4" />
          <InputGroupButton
            variant="default"
            className="rounded-full bg-chart-2 hover:bg-chart-2/80 cursor-pointer"
            size="icon-xs"
            disabled={text.trim().length === 0}
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </form>
  );
}

import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

export default function ChatView() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>
      <div className="border-t border-border p-4 shrink-0">
        <ChatForm />
      </div>
    </div>
  );
}

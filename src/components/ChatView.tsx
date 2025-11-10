import ChatForm from "./ChatForm";
import ChatList from "./ChatList";

export default function ChatView() {
  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto">
        <ChatList />
      </div>
      <div className="border-t border-border p-4">
        <ChatForm />
      </div>
    </div>
  );
}

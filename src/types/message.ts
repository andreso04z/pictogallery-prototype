export type Message = {
    id: number;
    sender: string;
    type: "text" | "drawing";
    content: string;
    timestamp: number;
};
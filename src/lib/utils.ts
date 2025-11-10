import { clsx, type ClassValue } from "clsx"
import { formatDistanceToNow } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTimeAgo(timestamp: number): string {
  const distanceToNow = formatDistanceToNow(timestamp, { addSuffix: true });
  if (distanceToNow === "less than a minute ago") return "now";
  if (distanceToNow.includes("about")) {
    return distanceToNow.replace("about ", "");
  }
  return distanceToNow;
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
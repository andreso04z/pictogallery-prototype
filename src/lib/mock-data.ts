import type { Room } from "../types/room";

export const mockRooms: Room[] = [
  {
    id: Date.now() - 2 * 60 * 1000,
    title: "Collaborative Character Design",
    badge: "JD",
    username: "johndoe",
    createdAt: Date.now() - 2 * 60 * 1000, // 2 minutes ago
  },
  {
    id: Date.now() - 15 * 60 * 1000,
    title: "Fantasy Landscape Brainstorm",
    badge: "SA",
    username: "sarahadams",
    createdAt: Date.now() - 15 * 60 * 1000, // 15 minutes ago
  },
  {
    id: Date.now() - 45 * 60 * 1000,
    title: "Logo Design Session",
    badge: "MK",
    username: "mikekim",
    createdAt: Date.now() - 45 * 60 * 1000, // 45 minutes ago
  },
  {
    id: Date.now() - 2 * 60 * 60 * 1000,
    title: "UI Wireframe Discussion",
    badge: "EL",
    username: "emilyliu",
    createdAt: Date.now() - 2 * 60 * 60 * 1000, // 2 hours ago
  },
  {
    id: Date.now() - 5 * 60 * 60 * 1000,
    title: "Pet Portrait Practice Room",
    badge: "TB",
    username: "tombrown",
    createdAt: Date.now() - 5 * 60 * 60 * 1000, // 5 hours ago
  },
  {
    id: Date.now() - 24 * 60 * 60 * 1000,
    title: "Comic Panel Storyboarding",
    badge: "AG",
    username: "annagarcia",
    createdAt: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
  },
  {
    id: Date.now() - 2 * 24 * 60 * 60 * 1000,
    title: "Abstract Art Experiment",
    badge: "DW",
    username: "davidwang",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
  },
  {
    id: Date.now() - 3 * 24 * 60 * 60 * 1000,
    title: "Game Asset Sketching",
    badge: "LM",
    username: "lisamartinez",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3 days ago
  },
  {
    id: Date.now() - 5 * 24 * 60 * 60 * 1000,
    title: "Anime Style Study Group",
    badge: "RT",
    username: "ryanturner",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000, // 5 days ago
  },
  {
    id: Date.now() - 7 * 24 * 60 * 60 * 1000,
    title: "Botanical Illustration Workshop",
    badge: "NK",
    username: "ninakhan",
    createdAt: Date.now() - 7 * 24 * 60 * 60 * 1000, // 1 week ago
  },
  {
    id: Date.now() - 10 * 24 * 60 * 60 * 1000,
    title: "Pixel Art Game Sprites",
    badge: "CJ",
    username: "chrisjones",
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000, // 10 days ago
  },
  {
    id: Date.now() - 14 * 24 * 60 * 60 * 1000,
    title: "Architecture Sketch Meetup",
    badge: "PR",
    username: "priyankarao",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000, // 2 weeks ago
  },
];
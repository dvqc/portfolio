import { atom } from "nanostores";

export const sidebarStatus = atom<"open" | "closed" | "closing">("closed");

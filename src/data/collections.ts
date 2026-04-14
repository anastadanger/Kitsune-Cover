export type CollectionId =
  | "evangelion"
  | "hello-kitty"
  | "sailor-moon"
  | "ghost"
  | "doraemon"
  | "totoro"
  | "tbd";

export type Collection = {
  id: CollectionId;
  index: number;
  nameKey:
    | "evangelion"
    | "helloKitty"
    | "sailorMoon"
    | "ghost"
    | "doraemon"
    | "totoro"
    | "tbd";
  accent: string;
  accent2: string;
  /** Right hero panel base */
  heroPanel: string;
  /** Hero panel foreground (phone tag, etc.) */
  heroInk: string;
};

export const collections: Collection[] = [
  {
    id: "evangelion",
    index: 1,
    nameKey: "evangelion",
    accent: "#7b2fff",
    accent2: "#00e5ff",
    heroPanel: "#7b2fff",
    heroInk: "#000000",
  },
  {
    id: "hello-kitty",
    index: 2,
    nameKey: "helloKitty",
    accent: "#ff2d8b",
    accent2: "#ffe500",
    heroPanel: "#ff2d8b",
    heroInk: "#000000",
  },
  {
    id: "sailor-moon",
    index: 3,
    nameKey: "sailorMoon",
    accent: "#c8a4ff",
    accent2: "#ffe500",
    heroPanel: "#c8a4ff",
    heroInk: "#000000",
  },
  {
    id: "ghost",
    index: 4,
    nameKey: "ghost",
    accent: "#00e5ff",
    accent2: "#000000",
    heroPanel: "#00e5ff",
    heroInk: "#000000",
  },
  {
    id: "doraemon",
    index: 5,
    nameKey: "doraemon",
    accent: "#1a8cff",
    accent2: "#ffffff",
    heroPanel: "#1a8cff",
    heroInk: "#000000",
  },
  {
    id: "totoro",
    index: 6,
    nameKey: "totoro",
    accent: "#5aad6e",
    accent2: "#ffffff",
    heroPanel: "#5aad6e",
    heroInk: "#000000",
  },
  {
    id: "tbd",
    index: 7,
    nameKey: "tbd",
    accent: "#111111",
    accent2: "#ff2d8b",
    heroPanel: "#111111",
    heroInk: "#ffffff",
  },
];

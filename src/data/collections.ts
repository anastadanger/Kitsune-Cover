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
    heroPanel: "#ff4f9a",
    heroInk: "#000000",
  },
  {
    id: "sailor-moon",
    index: 3,
    nameKey: "sailorMoon",
    accent: "#c8a4ff",
    accent2: "#ffe5f2",
    heroPanel: "#e8d4ef",
    heroInk: "#000000",
  },
  {
    id: "ghost",
    index: 4,
    nameKey: "ghost",
    accent: "#ffe566",
    accent2: "#7dd3c0",
    heroPanel: "#fff3bf",
    heroInk: "#000000",
  },
  {
    id: "doraemon",
    index: 5,
    nameKey: "doraemon",
    accent: "#e63946",
    accent2: "#1d3557",
    heroPanel: "#c1121f",
    heroInk: "#ffffff",
  },
  {
    id: "totoro",
    index: 6,
    nameKey: "totoro",
    accent: "#d4a5c7",
    accent2: "#7b2cbf",
    heroPanel: "#f3e8ff",
    heroInk: "#000000",
  },
  {
    id: "tbd",
    index: 7,
    nameKey: "tbd",
    accent: "#ff69b4",
    accent2: "#76ffb9",
    heroPanel: "#ff8fab",
    heroInk: "#000000",
  },
];

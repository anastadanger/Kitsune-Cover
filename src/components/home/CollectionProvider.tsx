"use client";

import { collections, type Collection } from "@/data/collections";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CollectionContextValue = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  collection: Collection;
};

const CollectionContext = createContext<CollectionContextValue | null>(null);

export function CollectionProvider({ children }: { children: ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const collection = collections[activeIndex] ?? collections[0];

  useEffect(() => {
    document.documentElement.style.setProperty("--collab-accent", collection.accent);
    document.documentElement.style.setProperty(
      "--collab-accent-2",
      collection.accent2,
    );
    document.documentElement.style.setProperty("--hero-ink", collection.heroInk);
  }, [collection]);

  const value = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      collection,
    }),
    [activeIndex, collection],
  );

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useActiveCollection() {
  const ctx = useContext(CollectionContext);
  if (!ctx) {
    throw new Error("useActiveCollection must be used within CollectionProvider");
  }
  return ctx;
}

import { CollectionProvider } from "@/components/home/CollectionProvider";
import { HomeExperience } from "@/components/home/HomeExperience";

export default function HomePage() {
  return (
    <CollectionProvider>
      <HomeExperience />
    </CollectionProvider>
  );
}

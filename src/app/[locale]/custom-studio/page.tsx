import { CustomStudioPage } from "@/components/home/CustomStudioPage";
import { CollectionProvider } from "@/components/home/CollectionProvider";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: { locale: string } };

export async function generateMetadata({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: "customStudio" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default function CustomStudioRoute({ params }: Props) {
  setRequestLocale(params.locale);
  return (
    <CollectionProvider>
      <CustomStudioPage />
    </CollectionProvider>
  );
}

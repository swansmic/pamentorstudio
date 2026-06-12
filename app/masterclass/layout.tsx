import { MetaPixelScript } from "@/components/meta-pixel-script";

export default function MasterclassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MetaPixelScript />
      {children}
    </>
  );
}

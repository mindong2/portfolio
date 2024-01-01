import { Registry as StyledComponentRegistry } from "@/styles/registry";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "KDM's Portfolio.",
  description: "성장을 갈구하는 개발자 김동민의 포트폴리오 입니다.",
};
export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  userScalable: false,
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}

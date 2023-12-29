import { Registry as StyledComponentRegistry } from "@/styles/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KDM's Portfolio.",
  description: "성장을 갈구하는 개발자 김동민의 포트폴리오 입니다.",
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

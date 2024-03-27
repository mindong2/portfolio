import { Registry as StyledComponentRegistry } from "@/styles/registry";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "김동민의 포트폴리오",
  description: "성장을 갈구하는 프론트엔드 개발자 김동민의 포트폴리오 입니다.",
  keywords: [
    "프론트",
    "프론트엔드",
    "frontend",
    "개발자",
    "프론트엔드 개발자",
    "웹개발자",
    "포트폴리오",
    "portfoilo",
    "포폴",
    "프론트엔드 포트폴리오",
    "프론트엔드 개발자 포트폴리오",
    "동민",
    "김동민",
    "개발자 포트폴리오",
    "react",
    "next",
    "js",
    "javascript",
    "css",
    "html",
    "react-query",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://dongmin-kim.vercel.app/",
    title: "김동민의 포트폴리오",
    description: "성장을 갈구하는 프론트엔드 개발자 김동민의 포트폴리오 입니다.",
    siteName: "Kimdongmin's Portfolio",
    images: [
      {
        url: "https://dongmin-kim.vercel.app/image/face.jpg",
        type: "image/jpg",
        alt: "성장을 갈구하는 프론트엔드 개발자 김동민입니다.",
      },
    ],
    locale: "ko_KR",
  },
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

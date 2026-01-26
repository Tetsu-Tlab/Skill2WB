import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import TransitionEffect from "@/components/TransitionEffect";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "教員採用試験 総合対策ポータル | 福岡・大分・長崎・佐賀",
    description: "高校公民（福岡・大分・長崎・佐賀）および特別支援（福岡市）の教員採用試験に向けた、過去問傾向分析と総合対策資料サイトです。",
    keywords: "教員採用試験, 高校公民, 特別支援学校, 福岡県, 大分県, 長崎県, 佐賀県, 福岡市, 過去問, 対策",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <TransitionEffect />
                {children}
            </body>
        </html>
    );
}

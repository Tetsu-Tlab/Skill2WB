"use client";

import { motion } from "framer-motion";
import {
    BookOpen,
    Users,
    MapPin,
    FileText,
    MessageSquare,
    School,
    ArrowRight,
    ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Reveal = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const SectionTitle = ({ title, subtitle }: { title: string, subtitle?: string }) => (
    <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-outfit mb-3">{title}</h2>
        {subtitle && <p className="text-neutral-400 max-w-2xl">{subtitle}</p>}
    </div>
);

const Card = ({ icon: Icon, title, content, tags, color = "accent" }: any) => (
    <div className="glass-card p-6 rounded-2xl h-full flex flex-col">
        <div className={`w-12 h-12 rounded-xl bg-${color}/10 flex items-center justify-center mb-6`}>
            <Icon className={`w-6 h-6 text-${color}`} />
        </div>
        <h3 className="text-xl font-bold mb-4 font-outfit">{title}</h3>
        <div className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow whitespace-pre-wrap">
            {content}
        </div>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-300">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="relative">
            {/* Hero Section */}
            <section className="relative min-height-[90vh] flex items-center justify-center pt-20 pb-32 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px]" />
                </div>

                <div className="container mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-bold tracking-widest text-accent uppercase mb-8">
                            Kyushu Teacher Recruitment Portal
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit mb-8 leading-[1.1] tracking-tight">
                            夢を現実に。<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                                九州教採突破の鍵。
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                            高校公民（福岡・大分・長崎・佐賀）および福岡市特別支援学校小学部。<br className="hidden md:block" />
                            膨大な過去問データと最新の傾向に基づいた、あなただけの合格戦略ガイド。
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="btn-primary group">
                                対策ガイドを開始する
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-6 py-3 rounded-full glass font-bold hover:bg-white/10 transition-all">
                                過去の出題傾向を見る
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Region Section: High School Civics */}
            <section className="py-24 px-6 bg-white/[0.02]">
                <div className="container mx-auto">
                    <Reveal>
                        <SectionTitle
                            title="高校公民：都道府県別アーカイブ"
                            subtitle="各自治体が求める教師像と、専門試験・論作文の出題傾向を徹底解析。"
                        />
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Reveal>
                            <Card
                                icon={MapPin}
                                title="福岡県"
                                content="【専門試験】倫理・政経のバランスが重要。特に人権教育に関する設問が頻出。\n【面接】不祥事防止と人権感覚、高い倫理観が問われる。"
                                tags={["記述式あり", "人権重視", "模擬授業10分"]}
                            />
                        </Reveal>
                        <Reveal>
                            <Card
                                icon={MapPin}
                                title="大分県"
                                content="【論作文】社会課題（AI・環境等）への教育的視点が問われる。\n【面接】自己紹介書を深掘り。教師としての強みと弱みを言語化せよ。"
                                tags={["1000字小論文", "場面指導あり", "4人面接官"]}
                            />
                        </Reveal>
                        <Reveal>
                            <Card
                                icon={MapPin}
                                title="長崎県"
                                content="【教育施策】「ふるさと教育」「平和教育」の理解が不可欠。\n【専門】共通テスト6割レベルの基礎力を確実に。\n【面接】離島勤務への覚悟と意欲。"
                                tags={["平和教育必須", "専門基礎重視", "30分個人面接"]}
                            />
                        </Reveal>
                        <Reveal>
                            <Card
                                icon={MapPin}
                                title="佐賀県"
                                content="【論文】佐賀県独自の教育キーワード（ICT・誇り等）を盛り込む。\n【専門】択一式スピード勝負。\n【面接】「現場での信頼性」と人柄を最重視。"
                                tags={["ICT教育", "独自ワード", "スピード感"]}
                            />
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Special Needs Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 -skew-x-12 transform origin-top" />
                <div className="container mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <Reveal>
                            <div>
                                <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Special Selection</span>
                                <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">福岡市 特別支援学校小学部</h2>
                                <p className="text-neutral-400 mb-8 leading-relaxed">
                                    福岡市が掲げる「5つのあるべき教員像」に基づき、特別支援教育の高度な専門性と情熱を評価します。\n
                                    併願制度の導入や奨学金返還支援など、志願者へのサポートも手厚い自治体です。
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "個別の教育支援計画・指導計画の作成力",
                                        "行動問題の機能分析と肯定的介入",
                                        "通常の学級との連携・合理的配慮",
                                        "5つの教員像（学力・情熱・安全・協調・社会性）"
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                                <ChevronRight className="w-3 h-3 text-accent" />
                                            </div>
                                            <span className="text-sm text-neutral-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card
                                    icon={BookOpen}
                                    title="専門教養"
                                    content="特別支援教育の基礎理論に加え、小学部全教科の基礎知識が問われる。"
                                    tags={["教科専門", "特別支援専門"]}
                                    color="blue-400"
                                />
                                <Card
                                    icon={FileText}
                                    title="論文対策"
                                    content="「本市のあるべき教員像」を軸に、現場での実践例を交えて論述。"
                                    tags={["配点100点", "実践重視"]}
                                    color="blue-400"
                                />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Feature Section: Methodologies */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="container mx-auto">
                    <Reveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-outfit mb-4">総合的な対策アプローチ</h2>
                            <p className="text-neutral-500">合格を確実にするための、3つの柱。</p>
                        </div>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Reveal>
                            <div className="text-center group cursor-pointer">
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <FileText className="w-8 h-8 text-neutral-400 group-hover:text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">論作文・小論文</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    自治体の教育施策を反映させた「合格する構成案」を作成。キーワードの埋め込み方を伝授。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="text-center group cursor-pointer">
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <MessageSquare className="w-8 h-8 text-neutral-400 group-hover:text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">面接・模擬授業</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    想定質問に対する「自分ならでは」の回答作成。場面指導での具体的な声掛けパターンを網羅。
                                </p>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="text-center group cursor-pointer">
                                <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                                    <BookOpen className="w-8 h-8 text-neutral-400 group-hover:text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">専門・教職教養</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    過去5年の出題傾向を分析した「出る順」重要トピックの抽出。効率的なインプットを実現。
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 px-6">
                <div className="container mx-auto glass rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                    <Reveal>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">合格への第一歩を、ここから。</h2>
                        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-12">
                            最新の試験情報や、合格者の体験談に基づいた資料を随時更新。九州での教職生活を、私たちと共に。
                        </p>
                        <button className="btn-primary">
                            今すぐ学習を開始する
                        </button>
                    </Reveal>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 border-t border-white/5 text-center">
                <p className="text-sm text-neutral-500">
                    &copy; 2026 Kyushu Teacher Prep Portal. All Rights Reserved.
                </p>
            </footer>
        </main>
    );
}

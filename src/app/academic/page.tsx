"use client";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function AcademicPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    トップへ戻る
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 md:p-12 rounded-[2rem]"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-accent" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">専門教養・教職教養 突破ガイド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【高校公民】出る順：重要トピック分析</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>過去5年の九州各県の出題を分析し、特に重点を置くべき領域を抽出しました：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <h3 className="text-white font-bold mb-2">① 現代の政治・経済</h3>
                                        <ul className="text-sm space-y-1">
                                            <li>・最新の経済指標と金融政策</li>
                                            <li>・選挙制度改正と18歳選挙権</li>
                                            <li>・日本の社会保障制度の歴史と現状</li>
                                        </ul>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl">
                                        <h3 className="text-white font-bold mb-2">② 哲学・倫理・思想</h3>
                                        <ul className="text-sm space-y-1">
                                            <li>・近代欧州思想（社会契約説・カント等）</li>
                                            <li>・日本の近代化と和魂洋才</li>
                                            <li>・持続可能な社会への価値観</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                            <h2 className="text-xl font-bold mb-4 text-accent">教職教養の必須知識</h2>
                            <p className="text-sm text-neutral-300 mb-4">法規、心理、教育原理の基礎を確実に網羅。特に以下の最新動向は必修です：</p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <li className="flex gap-2 text-sm items-center"><CheckCircle2 className="w-4 h-4 text-accent" /> 教育基本法・学校教育法の条文</li>
                                <li className="flex gap-2 text-sm items-center"><CheckCircle2 className="w-4 h-4 text-accent" /> 学習指導案の構成原理</li>
                                <li className="flex gap-2 text-sm items-center"><CheckCircle2 className="w-4 h-4 text-accent" /> 生徒指導提要（最新改訂版）</li>
                                <li className="flex gap-2 text-sm items-center"><CheckCircle2 className="w-4 h-4 text-accent" /> 不登校・いじめ対応のガイドライン</li>
                            </ul>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

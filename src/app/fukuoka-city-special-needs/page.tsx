"use client";
import { motion } from "framer-motion";
import { ArrowLeft, School, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FukuokaCitySpecialNeedsPage() {
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
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                            <School className="w-6 h-6 text-blue-400" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">福岡市：特別支援学校（小学部）対策</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-blue-400">福岡市が求める「5つの教員像」</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "向上心（学力を高める）",
                                    "人権感覚（あたたかい指導）",
                                    "危機管理（安全の確保）",
                                    "協調性（地域との協働）",
                                    "社会性（不祥事の根絶）"
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-neutral-300">
                                        <CheckCircle2 className="w-4 h-4 text-blue-400" />
                                        <span className="text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-blue-400">重要トピックと口頭試問対策</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>特別支援学校の専門性として、以下のキーワードに対する深い理解が求められます：</p>
                                <div className="space-y-6">
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <h3 className="font-bold text-white mb-2">個別の教育支援計画・指導計画</h3>
                                        <p className="text-sm">PDCAサイクルを回し、多職種連携を実現するための具体的な手法。家庭との連携についても具体策を持っておくこと。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <h3 className="font-bold text-white mb-2">行動問題への対応（ABA/PBS）</h3>
                                        <p className="text-sm">不適切な行動の「機能分析（なぜその行動をするのか）」を行い、適切な代替行動をどう学習させるか（肯定的介入）。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                                        <h3 className="font-bold text-white mb-2">合理的配慮と基礎的環境整備</h3>
                                        <p className="text-sm">一人ひとりのニーズに応じた配慮と、その前提となるユニバーサルデザインの視点を持った環境作り。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

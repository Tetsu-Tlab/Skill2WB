"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function NagasakiPage() {
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
                            <MapPin className="w-6 h-6 text-accent" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">長崎県：高校公民 対策ガイド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【独自施策】長崎の教育を語る</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>長崎県では「平和教育」と「ふるさと教育」が大きな柱です：</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 被爆地としての「命の教育」「平和への願い」を公民の授業にどう統合するか。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 離島・僻地での教育活動に対する意欲と適応力が重視されます。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 「長崎県が求める教師像」を深く理解し、自身の言葉で語れることが絶対条件。</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【専門・面接】基礎力と情熱</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>人物評価の比重が高く、30分間のロング個人面接で真価が問われます：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">専門教科の基礎</h3>
                                        <p className="text-sm">共通テストで6割以上を確実に取れるレベルの基礎知識を重視。難問奇問より、基礎の確実性が評価されます。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">多角的な評価</h3>
                                        <p className="text-sm">適性、意欲、社会性、指導力、専門性が10段階で評価されます。自己分析を徹底し、一貫性のある回答を準備せよ。</p>
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

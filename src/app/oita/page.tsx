"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OitaPage() {
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
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">大分県：高校公民 対策ガイド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【論作文】社会課題への深い考察</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>大分県の論作文（1000字以内）は、幅広い社会課題を教育現場にどう落とし込むかが問われます：</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> AIとの共生、環境問題、食品ロス、高齢社会などがテーマ。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 単なる社会論ではなく「教師として生徒にどう考えさせるか」という実践的視点が必須。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 大分県が求める「使命感」「倫理観」「柔軟性」を文中に織り込む。</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【個人面接】人間性の深掘り</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>面接官が4名と多く、客観的な視点で受験者の「強み・弱み」が評価されます：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">自己紹介書の活用</h3>
                                        <p className="text-sm">提出書類に基づき、過去の困難への向き合い方やストレス解消法など、メンタル面も含む深く多角的な質問がなされます。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">場面指導</h3>
                                        <p className="text-sm">一次合格後に公表されるテーマに基づき実施。生徒への情熱と理論に基づいた指導力が試されます。</p>
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

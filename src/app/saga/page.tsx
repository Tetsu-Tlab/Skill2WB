"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SagaPage() {
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
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">佐賀県：高校公民 対策ガイド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【小論文】独自ワードの戦略的活用</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>佐賀県の小論文（800字・60分）は、県の教育施策との親和性が鍵となります：</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 「ICT教育」「佐賀を誇りに」「志を高める」「唯一無二」などのキーワード。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 抽象論に終始せず、具体的な「佐賀の学校現場」をイメージした記述が必要。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 構造的な文章力を鍛え、60分で完成させるスピード感を身につける。</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【試験形式】スピードと人柄重視</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>専門試験の時間が短縮され、より効率的な知識のアウトプットが求められます：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">択一式スピード勝負</h3>
                                        <p className="text-sm">専門試験が100分から60分に短縮。全問択一式（マークシート）となり、正確かつ迅速な解答能力が必要です。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">現場での信頼性</h3>
                                        <p className="text-sm">面接では「現場でどう行動できるか」という実践力と、誠実な「人柄」が合否を左右する最大の要因となります。</p>
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

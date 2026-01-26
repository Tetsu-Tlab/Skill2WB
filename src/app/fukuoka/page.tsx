"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function FukuokaPage() {
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
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">福岡県：高校公民 対策ガイド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【専門試験】の傾向と対策</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>福岡県の専門試験は、倫理・政治・経済の全範囲からバランスよく出題されますが、近年の傾向として以下が挙げられます：</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 人権教育に関連する憲法判例、最新の法改正（少年法、民法等）が頻出。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 倫理分野では西洋思想のみならず、日本の思想（近世・近代）も重視される。</li>
                                    <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> 記述式の設問では、用語の定義だけでなく「歴史的背景」や「現代的意義」を問う。</li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">【面接・模擬授業】のポイント</h2>
                            <div className="space-y-4 text-neutral-400 leading-relaxed">
                                <p>第2次試験では「高い倫理観」と「人権感覚」が厳しくチェックされます：</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">不祥事防止</h3>
                                        <p className="text-sm">飲酒運転や体罰、わいせつ行為に対し、福岡県は極めて厳しい姿勢をとっています。自身の不退転の決意を言葉にする必要があります。</p>
                                    </div>
                                    <div className="p-6 bg-white/5 rounded-2xl">
                                        <h3 className="font-bold text-white mb-3">模擬授業テーマ例</h3>
                                        <p className="text-sm">「日本国憲法の三原理と人権保障」「現代の経済社会と福祉」など。生徒の主体的・対話的な学びをどう引き出すかが鍵。</p>
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

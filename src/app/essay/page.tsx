"use client";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle2, History, Lightbulb, Trophy } from "lucide-react";
import Link from "next/link";

const Reveal = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
    >
        {children}
    </motion.div>
);

export default function EssayPage() {
    return (
        <main className="min-h-screen pt-24 pb-12 px-6">
            <div className="container mx-auto max-w-5xl">
                <Link href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    トップへ戻る
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card p-8 md:p-12 rounded-[2rem] overflow-hidden relative"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <FileText className="w-64 h-64" />
                    </div>

                    <div className="flex items-center gap-4 mb-12">
                        <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                            <FileText className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold font-outfit">論作文・小論文 徹底攻略ガイド</h1>
                            <p className="text-neutral-500 mt-2">過去3年の出題傾向分析と合格への戦略</p>
                        </div>
                    </div>

                    {/* Section: Past Questions */}
                    <section className="space-y-16">
                        <Reveal>
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <History className="w-6 h-6 text-accent" />
                                    <h2 className="text-2xl font-bold font-outfit">自治体別：過去3年の出題テーマ</h2>
                                </div>

                                <div className="grid grid-cols-1 gap-6">
                                    {/* 佐賀県 */}
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            佐賀県 <span className="text-xs font-normal text-neutral-500">800字 / 60分 / 縦書き</span>
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="flex gap-4">
                                                <span className="text-accent font-mono text-sm shrink-0">2024</span>
                                                <p className="text-sm text-neutral-300">教育大綱vol.3「自分で自分のことを決められる子どもに育てたい」の解釈と実践</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-accent font-mono text-sm shrink-0">2023</span>
                                                <p className="text-sm text-neutral-300">「ほめよう、さがっ子。」スローガンに基づく、自己肯定感を育む教育活動</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="text-accent font-mono text-sm shrink-0">2022</span>
                                                <p className="text-sm text-neutral-300">志を高め、自ら学び、未来を切り拓く子どもの育成</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 大分県 */}
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            大分県 <span className="text-xs font-normal text-neutral-500">1000字 / 70分 (特別選考例)</span>
                                        </h3>
                                        <p className="text-xs text-neutral-500 mb-2">※大分県は社会課題と言語能力の育成を重視する傾向があります</p>
                                        <div className="space-y-4 text-neutral-300 text-sm">
                                            <p>・AIや環境問題など、急速に変化する社会における教育の役割</p>
                                            <p>・主体的な学びを支えるICTの活用と、人間ならではの教育の融合</p>
                                            <p>・郷土「おおいた」への愛着と、国際的な視野を併せ持つ人材育成</p>
                                        </div>
                                    </div>

                                    {/* 福岡県・福岡市 */}
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                            福岡県・福岡市 <span className="text-xs font-normal text-neutral-500">800字前後</span>
                                        </h3>
                                        <div className="space-y-4 text-neutral-300 text-sm">
                                            <p><span className="text-blue-400 font-bold">福岡県:</span> 信頼される教師、不祥事防止、人権感覚豊かな子どもの育成（現場実践重視）</p>
                                            <p><span className="text-blue-400 font-bold">福岡市:</span> 「5つのあるべき教員像」に基づく具体的な指導法。特に特別支援における合理的配慮。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Section: Strategic Approach */}
                        <Reveal>
                            <div>
                                <div className="flex items-center gap-3 mb-8">
                                    <Lightbulb className="w-6 h-6 text-accent" />
                                    <h2 className="text-2xl font-bold font-outfit">合格する論文の「勝ちパターン」</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-inter text-neutral-400">
                                    <div className="space-y-6">
                                        <h3 className="text-white font-bold flex items-center gap-2">
                                            論理構成の黄金比
                                        </h3>
                                        <ul className="space-y-4">
                                            <li className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                                                <p className="text-white text-sm font-bold mb-1">1. テーマの今日的意義（15%）</p>
                                                <p className="text-xs">なぜ今そのテーマが重要なのか、学習指導要領や自治体の施策などを踏まえて述べる。</p>
                                            </li>
                                            <li className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                                                <p className="text-white text-sm font-bold mb-1">2. 教師としての基本姿勢（25%）</p>
                                                <p className="text-xs">「私は～と考える」と明確なビジョンを提示し、その根拠を教育論として展開。</p>
                                            </li>
                                            <li className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                                                <p className="text-white text-sm font-bold mb-1">3. 具体的な実践場面（45%）</p>
                                                <p className="text-xs">ここが最重要。授業、学級経営、行事、家庭連携の4つの視点から2つ選び具体的に書く。</p>
                                            </li>
                                            <li className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                                                <p className="text-white text-sm font-bold mb-1">4. 将来への展望（15%）</p>
                                                <p className="text-xs">自治体の教育課題を解決するために、自身がどう成長し貢献したいかで締める。</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-6 text-sm">
                                        <h3 className="text-white font-bold flex items-center gap-2">
                                            よい事例に共通する要素
                                        </h3>
                                        <div className="p-6 bg-white/5 rounded-2xl space-y-4">
                                            <div className="flex gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                                <p><strong className="text-white">主語が明確:</strong> 「学校では～」ではなく「私は教員として～する」と責任ある表現を用いている。</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                                <p><strong className="text-white">独自キーワードの埋め込み:</strong> 自治体の教育大綱にある言葉を自然な形で盛り込んでいる（例：佐賀県の「ほめよう」）。</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                                <p><strong className="text-white">PDCAサイクルの記述:</strong> 指導して終わりではなく、評価・改善まで言及している。</p>
                                            </div>
                                            <div className="flex gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                                <p><strong className="text-white">子どもの変容を記述:</strong> 教師の行動だけでなく、それによって「子どもがどう変わるか」という出口を意識している。</p>
                                            </div>
                                        </div>

                                        <div className="mt-8 p-6 glass rounded-2xl border border-blue-500/20">
                                            <h3 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                                <Trophy className="w-4 h-4" /> 評価が分かれるポイント
                                            </h3>
                                            <p className="text-xs leading-relaxed italic">
                                                「～に努めたい」という願望表現ばかりの論文はC評価。「～を実践する。」「～と接する。」という断定・実行表現が並ぶ論文はA評価に近づきます。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* CTA Section */}
                        <Reveal>
                            <div className="text-center p-12 bg-white/5 rounded-[2.5rem] border border-white/10">
                                <h2 className="text-2xl font-bold mb-6">実践トレーニングへ</h2>
                                <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                                    過去問のテーマを使って、実際に800字の構成案を作ってみましょう。自治体別の個別対策ページにもヒントが満載です。
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <button className="btn-primary">書き方添削を依頼する（準備中）</button>
                                    <Link href="/fukuoka">
                                        <button className="px-6 py-3 rounded-full glass font-bold hover:bg-white/10 transition-all">福岡県の詳細へ</button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

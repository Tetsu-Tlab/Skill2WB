"use client";
import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function InterviewPage() {
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
                            <MessageSquare className="w-6 h-6 text-accent" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">面接・模擬授業 完璧攻略</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">想定質問：自分軸の回答作成</h2>
                            <div className="space-y-4">
                                {[
                                    { q: "なぜ教員になりたいと思ったのですか？", a: "個人的な原体験に基づき、生徒の成長にどう寄与したいかを定義する。" },
                                    { q: "なぜこの自治体を受験したのですか？", a: "その自治体の教育施策と、自分のやりたい教育の合致点を具体例で示す。" },
                                    { q: "不祥事を起こした教員についてどう思いますか？", a: "厳しい糾弾だけでなく、自分自身が当事者意識を持ってどう予防するかを論理的に語る。" },
                                    { q: "同僚と意見が食い違った場合、どうしますか？", a: "「生徒のため」という共通の目的に立ち返り、傾聴と冷静な対話を重視する姿勢を示す。" }
                                ].map((item, idx) => (
                                    <div key={idx} className="p-4 bg-white/5 rounded-xl border border-white/5">
                                        <p className="text-white font-bold mb-2">Q. {item.q}</p>
                                        <p className="text-sm text-neutral-400">💡 回答の核: {item.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-white/[0.02] rounded-2xl border border-white/10">
                            <h2 className="text-xl font-bold mb-4 text-accent">模擬授業での「勝ちパターン」</h2>
                            <p className="text-sm text-neutral-300 mb-6">話し方、視線、板書の丁寧さだけでなく、以下のテクニックを取り入れましょう：</p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0 text-xs font-bold text-accent">1</div>
                                    <p className="text-sm text-neutral-400"><strong className="text-white">問いかけの工夫:</strong> 「はい、皆さんどう思いますか？」ではなく、具体的な問いを発し、机間指導で生徒一人ひとりを見つめる演出。</p>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center shrink-0 text-xs font-bold text-accent">2</div>
                                    <p className="text-sm text-neutral-400"><strong className="text-white">振り返りの時間:</strong> 授業の最後に、今日の学びが「自分たちの生活や社会とどう繋がっているか」を考えさせる時間を作る。</p>
                                </li>
                            </ul>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

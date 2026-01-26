"use client";
import { motion } from "framer-motion";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function EssayPage() {
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
                            <FileText className="w-6 h-6 text-accent" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold font-outfit">論作文・小論文 必勝メソッド</h1>
                    </div>

                    <section className="space-y-12">
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-accent">合格のための「4段構成」テンプレート</h2>
                            <div className="space-y-6">
                                <div className="p-5 bg-white/5 rounded-2xl">
                                    <h3 className="text-white font-bold mb-2">① 序論：現状分析と決意（約15%）</h3>
                                    <p className="text-sm text-neutral-400">出題テーマの背景にある現代的教育課題を捉え、自分の教師としての信念を提示する。</p>
                                </div>
                                <div className="p-5 bg-white/5 rounded-2xl">
                                    <h3 className="text-white font-bold mb-2">② 本論1：資質・能力の基盤（約35%）</h3>
                                    <p className="text-sm text-neutral-400">テーマを実現するために必要な専門性、教育観について論理的に記述する。</p>
                                </div>
                                <div className="p-5 bg-white/5 rounded-2xl">
                                    <h3 className="text-white font-bold mb-2">③ 本論2：学校での具体的実践（約35%）</h3>
                                    <p className="text-sm text-neutral-400">生徒一人ひとりへの配慮、ICTの活用、学級経営への応用など、実践例を明解に示す。</p>
                                </div>
                                <div className="p-5 bg-white/5 rounded-2xl">
                                    <h3 className="text-white font-bold mb-2">④ 結論：将来の展望（約15%）</h3>
                                    <p className="text-sm text-neutral-400">その自治体で働くことへの情熱と、自己研鑽に向けた姿勢で締めくくる。</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                            <h2 className="text-xl font-bold mb-4 text-accent">自治体別「隠しキーワード」</h2>
                            <ul className="space-y-2 text-sm text-neutral-300">
                                <li><span className="text-accent font-bold">【福岡市】</span> 福岡市教育基本計画。5つのあるべき教員像。</li>
                                <li><span className="text-accent font-bold">【佐賀県】</span> ICT利活用。佐賀を誇りに想う心の育成。</li>
                                <li><span className="text-accent font-bold">【大分県】</span> 自律・協働・創造。</li>
                            </ul>
                        </div>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}

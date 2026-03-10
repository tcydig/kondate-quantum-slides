---
marp: true
theme: kondate
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# 🍚 量子献立提案アプリ

### 量子アニーリング × 学校給食

<p class="catchcopy">実運用に耐えるスケーラブルなQUBOの構築</p>

---

## 📌 学校給食の現実 — 想像以上に複雑な最適化問題

<div style="display: flex; gap: 24px; align-items: flex-start;">
<div style="flex: 1;">

### 現場の実態

ヒアリングで明らかになった、既存研究が想定していない現実

- **複数コース**の献立を同時に作成（A/Bコース）
- **20日分**の献立を一度に計画
- レシピ数は **300〜500品**
- 栄養価・コスト・食材重複・ジャンル多様性…**条件は多岐にわたる**

</div>
<div style="flex: 1; background: rgba(255,138,101,0.1); border-radius: 16px; padding: 24px;">

### さらに条件は増え続ける

栄養士・調理員へのヒアリングを重ねるほど、考慮すべき条件が見つかる

- 👩‍🍳 調理員の工程数負荷
- 🧑‍⚕️ 栄養士の実務上の制約
- 🌍 環境負荷（将来）
- …

**条件の洗い出しは現在進行形**

</div>
</div>

---

## 📊 既存研究の限界

<div style="text-align: center; margin-bottom: 16px;">

先行事例の量子アニーリング献立提案には **2つの根本的な課題** がある

</div>

<div style="display: flex; gap: 24px; margin-bottom: 20px;">

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.5em; margin-bottom: 8px;">📐</div>
<div style="text-align: center; font-weight: bold; color: #C62828; margin-bottom: 12px;">1コース前提の定式化</div>
<div style="font-size: 0.88em;">
実際の給食は複数コースが基本。既存研究は1コースしか想定しておらず、コース間の重複回避や公平性を扱えない
</div>
</div>

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.5em; margin-bottom: 8px;">💥</div>
<div style="text-align: center; font-weight: bold; color: #C62828; margin-bottom: 12px;">スケールしないQUBO</div>
<div style="font-size: 0.88em;">
M日一括方式は変数数が N×M に膨張。20日×300品で6,000変数、QUBO行列は3,600万要素に達し、解の品質・実行時間ともに実用に耐えない
</div>
</div>

</div>

<div style="text-align: center; padding: 16px; background: rgba(191, 54, 12, 0.08); border-radius: 12px; border-left: 4px solid #E65100;">

**条件が増え続ける現実に対して、既存のQUBOでは破綻する**
→ 実運用に耐えるスケーラブルなQUBOの構築が不可欠

</div>

---

## 🎯 今回の挑戦 — スケーラブルなQUBOの「器」

<div style="text-align: center; margin-bottom: 16px; font-size: 1.05em;">

条件が増え続けることを前提に、**拡張可能なQUBOの基盤**を先に構築する

</div>

<div style="display: flex; gap: 20px; align-items: stretch; margin: 16px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.1em; font-weight: bold; color: #C62828; margin-bottom: 12px;">既存研究のアプローチ</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・M日分を一括でQUBO化<br>
・変数数: N × M（日数に比例）<br>
・条件追加 → 変数空間が爆発<br>
・<strong>スケールの限界が構造的</strong>
</div>
</div>

<div style="display: flex; align-items: center; font-size: 2.5em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 24px; border: 2px solid #66BB6A; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.1em; font-weight: bold; color: #2E7D32; margin-bottom: 12px;">本アプリのアプローチ</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・1日ずつ分割してsolve<br>
・変数数: N × 2（<strong>日数に非依存</strong>）<br>
・条件追加 → 制約項を追加するだけ<br>
・<strong>スケールする「器」として設計</strong>
</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

今後のヒアリングで条件が増えても、**QUBOの構造を変えずに制約項を追加できる**設計

</div>

---

## ⚙️ アプリの仕組み

<div style="display: flex; align-items: center; gap: 12px; margin: 20px 0;">

<div style="flex: 1; background: linear-gradient(135deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 20px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.1em; font-weight: bold; color: #2E7D32; margin-bottom: 10px;">📥 入力データ</div>
<div style="font-size: 0.85em; text-align: left; line-height: 2;">
・レシピDB（295品・5カテゴリ）<br>
・栄養素（4項目）・食材単価<br>
・予算制約・日数<br>
・<strong>調理工程数データ</strong>
</div>
</div>

<div style="font-size: 2em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 20px; text-align: center; border: 2px solid #FFAB91; box-shadow: 0 4px 16px rgba(230, 81, 0, 0.15);">
<div style="font-size: 1.1em; font-weight: bold; color: #E65100; margin-bottom: 10px;">⚛️ 量子アニーリング</div>
<div style="font-size: 0.85em; line-height: 1.8;">
QUBO定式化（7制約項）<br>
A/B 2コースを<strong>同時最適化</strong><br>
<span style="font-size: 0.85em;">Amplify AE + Toshiba SQBM+</span>
</div>
</div>

<div style="font-size: 2em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(135deg, #E3F2FD, #BBDEFB); border-radius: 16px; padding: 20px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.1em; font-weight: bold; color: #1565C0; margin-bottom: 10px;">📤 提案結果</div>
<div style="font-size: 0.85em; text-align: left; line-height: 2;">
・A/Bコース別の最適献立<br>
・日別の栄養充足・コスト<br>
・カテゴリ構成チェック<br>
・<strong>日別調理工程数</strong>
</div>
</div>

</div>

<div style="text-align: center; margin-top: 12px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

**A/Bコースの献立を同時最適化** — どちらのコースも公平に、栄養・コスト・調理負荷のバランスが取れた献立を提案

</div>

---

## 📐 QUBO定式化 — 7つの制約・目的関数

<div style="text-align: center; margin-bottom: 12px; font-size: 1.0em;">

295品のレシピから、A/Bコース×M日分の献立を **二値変数 x[N, 2]** で表現

</div>

<div style="display: flex; gap: 16px;">

<div style="flex: 1;">

| 項 | 種別 | 内容 |
|:--:|:----:|------|
| H1 | ハード | カテゴリ制約（主食・主菜=1、副菜等≤1） |
| H4 | ハード | 同一レシピ重複禁止 |
| H2 | ソフト | 栄養偏差の最小化（4栄養素） |
| H3 | ソフト | コスト目標への誘導 |

</div>

<div style="flex: 1;">

| 項 | 種別 | 内容 |
|:--:|:----:|------|
| H5 | ソフト | 同日ジャンル多様化 |
| H7 | ソフト | 隣接日の食材類似度抑制 |
| **H8** | **ソフト** | **調理工程数の目標制御** |

<div style="background: rgba(230,81,0,0.1); border-radius: 8px; padding: 10px; margin-top: 8px; font-size: 0.85em; border-left: 3px solid #E65100;">

**H8が本アプリの独自性** — 調理員の負荷を工程数として定量化し、QUBOに組み込み

</div>

</div>

</div>

<div style="background: #3E2723; color: #FFCCBC; border-radius: 12px; padding: 14px 20px; font-family: monospace; font-size: 0.82em; margin-top: 12px;">
<span style="color: #FF8A65; font-weight: bold;">モデル = </span>(H2 + H3 + H5 + H7 + H8)<sub>ソフト</sub> + (H1 + H4)<sub>ハード</sub>
</div>

---

## ⚛️ 最適化方式の進化 — 3ステップ

<div style="display: flex; gap: 14px; align-items: stretch; margin: 16px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 0.8em; color: #C62828; font-weight: bold;">Step 1: M日一括</div>
<div style="text-align: center; font-size: 0.75em; margin-top: 8px; color: #5D4037;">変数数: <strong>N×M = 5,900</strong></div>
<div style="text-align: center; font-size: 0.75em; color: #5D4037;">M=20: ~120秒</div>
<div style="margin-top: 10px; font-size: 0.72em; background: rgba(198,40,40,0.1); border-radius: 8px; padding: 8px;">
問題が大きすぎて解の品質が不安定。A/Bコース間の不公平も発生
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.3em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 0.8em; color: #E65100; font-weight: bold;">Step 2: 逐次方式</div>
<div style="text-align: center; font-size: 0.75em; margin-top: 8px; color: #5D4037;">変数数: <strong>N×2 = 590</strong>（固定）</div>
<div style="text-align: center; font-size: 0.75em; color: #5D4037;">M=20: ~70秒（42%短縮）</div>
<div style="margin-top: 10px; font-size: 0.72em; background: rgba(230,81,0,0.1); border-radius: 8px; padding: 8px;">
1日ずつ解くことで問題サイズを固定化。A/Bを同時最適化し公平性を実現
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.3em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 20px; border: 2px solid #66BB6A; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 0.8em; color: #2E7D32; font-weight: bold;">Step 3: 投機的並列</div>
<div style="text-align: center; font-size: 0.75em; margin-top: 8px; color: #5D4037;">変数数: <strong>N×2 = 590</strong>（固定）</div>
<div style="text-align: center; font-size: 0.75em; color: #5D4037;">M=20: ~55秒（54%短縮）</div>
<div style="margin-top: 10px; font-size: 0.72em; background: rgba(46,125,50,0.1); border-radius: 8px; padding: 8px;">
前方(AE)と後方(SQBM+)から同時にsolve。2台のアニーリングマシンで待ち時間を重畳
</div>
</div>

</div>

<div style="text-align: center; padding: 10px; background: rgba(191, 54, 12, 0.08); border-radius: 12px; font-size: 0.95em;">

問題分割 × A/B同時最適化 × 並列solverで、**解の品質を維持しながら実行時間を半分以下に**

</div>

---

## 🎙️ 現場の声が設計を変えた

<div style="display: flex; gap: 20px; margin-bottom: 16px;">
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">栄養士へのヒアリング</div>
「給食はA/Bの<strong>複数コース</strong>が前提。1コースだけの最適化では使えない」
</div>
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">調理員へのヒアリング</div>
「調理に時間がかかるメニューが多いと<strong>当日の作業量が過大</strong>になる」
</div>
</div>

<div style="display: flex; gap: 16px;">

<div style="flex: 1; background: rgba(191,54,12,0.06); border-radius: 12px; padding: 16px;">
<div style="font-weight: bold; color: #BF360C; margin-bottom: 8px;">既存研究との乖離</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・複数コースの存在を想定していない<br>
・調理員の負荷が考慮されていない<br>
→ 既存QUBOをそのまま流用できない
</div>
</div>

<div style="flex: 1; background: rgba(191,54,12,0.06); border-radius: 12px; padding: 16px;">
<div style="font-weight: bold; color: #BF360C; margin-bottom: 8px;">実用上の課題</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・20日×300品で変数数6,000に膨張<br>
・解の品質が不安定・実行時間も実用外<br>
→ 条件が増えるほど悪化する構造
</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

ヒアリングの結果、**既存QUBOの改良ではなく、スケーラブルな再設計が必要**と判断

</div>

---

## 📊 実測パフォーマンス

<div style="text-align: center; margin-bottom: 16px;">

レシピ数 N=295、M=20日（A/Bコース同時最適化）での実測結果

</div>

| 方式 | 変数数 | 実行時間 | 短縮率 | solver |
|:---:|:---:|:---:|:---:|:---:|
| M日一括 | 5,900 | ~120秒 | — | AE |
| 逐次 | 590（固定） | ~70秒 | 42%短縮 | AE |
| **投機的並列** | **590（固定）** | **~55秒** | **54%短縮** | **AE + SQBM+** |

<div style="display: flex; gap: 20px; margin-top: 20px;">

<div style="flex: 1; background: rgba(46,125,50,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #66BB6A;">
<div style="font-weight: bold; color: #2E7D32; margin-bottom: 6px;">変数空間の固定化</div>
<div style="font-size: 0.85em;">変数数はN×2で日数Mに非依存。N=500品でも1,000変数に収まり、条件が増えても破綻しない</div>
</div>

<div style="flex: 1; background: rgba(230,81,0,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #FF8A65;">
<div style="font-weight: bold; color: #E65100; margin-bottom: 6px;">実行時間の半減</div>
<div style="font-size: 0.85em;">一括方式の120秒から55秒へ。2台のアニーリングマシンの待ち時間を重畳し、さらなる短縮を実現</div>
</div>

</div>

---

## 🔄 条件拡張のロードマップ

<div style="text-align: center; margin-bottom: 16px;">

ヒアリング → 条件追加 → 再最適化のサイクルで、QUBOを段階的に成長させる

</div>

<div style="display: flex; gap: 14px; align-items: stretch; margin: 16px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #E65100, #BF360C); border-radius: 16px; padding: 20px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.2);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 1（現在）</div>
<div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">🏫 栄養士 × 調理員</div>
<div style="font-size: 0.78em; line-height: 1.6; opacity: 0.9;">
栄養価・コスト・食材多様性<br>
+ 調理工程数<br>
+ A/Bコース同時最適化<br>
<strong style="color: #FFE0B2;">← 今回の成果</strong>
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.3em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #FF8A65, #E65100); border-radius: 16px; padding: 20px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.15);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 2</div>
<div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">👩‍🍳 調理現場の深掘り</div>
<div style="font-size: 0.78em; line-height: 1.6; opacity: 0.9;">
調理時間・同時並行度<br>
前日準備の有無<br>
設備制約（オーブン数等）<br>
<em>→ H8の精緻化・新制約追加</em>
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.3em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #FFAB91, #FF8A65); border-radius: 16px; padding: 20px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.1);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 3</div>
<div style="font-size: 1.1em; font-weight: bold; margin-bottom: 10px;">🌍 環境負荷の統合</div>
<div style="font-size: 0.78em; line-height: 1.6; opacity: 0.9;">
フードマイレージ<br>
食品ロス削減<br>
地産地消の推進<br>
<em>→ 新たな制約項として追加</em>
</div>
</div>

</div>

<div style="text-align: center; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

スケーラブルなQUBOの「器」があるからこそ、**条件が増えても制約項を追加するだけ**で対応できる

</div>

---

## 📈 展開先の拡大

<div style="display: flex; gap: 24px; align-items: flex-start; margin: 20px 0;">

<div style="flex: 1;">

### 同じ課題を持つ領域へ

<div style="display: flex; gap: 12px; margin-top: 12px; flex-direction: column;">

<div style="background: rgba(230,81,0,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #FF8A65;">
<div style="font-weight: bold; color: #E65100;">🏫 学校給食（現在）</div>
<div style="font-size: 0.85em; margin-top: 4px;">栄養基準が明確で検証しやすい</div>
</div>

<div style="background: rgba(230,81,0,0.06); border-radius: 12px; padding: 16px; border-left: 4px solid #FFAB91;">
<div style="font-weight: bold; color: #BF360C;">🏥 病院給食・社会福祉施設</div>
<div style="font-size: 0.85em; margin-top: 4px;">疾患別の栄養制約が加わる → 制約項を追加</div>
</div>

<div style="background: rgba(230,81,0,0.04); border-radius: 12px; padding: 16px; border-left: 4px solid #FFCCBC;">
<div style="font-weight: bold; color: #5D4037;">🏠 家庭の献立提案</div>
<div style="font-size: 0.85em; margin-top: 4px;">朝食・夕食で一日を通した栄養最適化</div>
</div>

</div>
</div>

<div style="flex: 1;">

### スケーラブル設計が可能にすること

<div style="background: rgba(46,125,50,0.08); border-radius: 16px; padding: 24px; margin-top: 12px; border-left: 4px solid #66BB6A;">
<div style="font-size: 0.9em; line-height: 2;">

展開先ごとに **条件は異なる** が、
QUBOの基盤構造は **共通**

- 制約項の追加・重み調整で対応
- 変数空間は N×2 で固定
- 日数・コース数の増加にも耐える

**→ 一度作った「器」が横展開を加速**

</div>
</div>

</div>
</div>

---

## 🍚 まとめ

<div style="display: flex; gap: 20px; margin: 20px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-weight: bold; color: #C62828; margin-bottom: 12px; font-size: 1.05em;">課題</div>
<div style="font-size: 0.88em; line-height: 1.9;">
・既存QUBOは1コース前提でスケールしない<br>
・現場ヒアリングで条件は増え続ける<br>
・条件追加のたびに変数空間が爆発する構造
</div>
</div>

<div style="display: flex; align-items: center; font-size: 2em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 24px; border: 2px solid #66BB6A; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-weight: bold; color: #2E7D32; margin-bottom: 12px; font-size: 1.05em;">成果</div>
<div style="font-size: 0.88em; line-height: 1.9;">
・変数空間をN×2に固定（日数に非依存）<br>
・A/Bコース同時最適化を実現<br>
・実行時間を半分以下に短縮（120秒→55秒）
</div>
</div>

</div>

<div style="display: flex; gap: 16px; margin-top: 16px;">
<div style="flex: 1; background: rgba(46,125,50,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #66BB6A; font-size: 0.9em;">
✅ 条件が増えても <strong>制約項を追加するだけ</strong> で対応できる「器」
</div>
<div style="flex: 1; background: rgba(21,101,192,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #42A5F5; font-size: 0.9em;">
✅ 学校給食から <strong>病院・福祉・家庭</strong> へ横展開可能な基盤
</div>
<div style="flex: 1; background: rgba(230,81,0,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #FF8A65; font-size: 0.9em;">
✅ 栄養士・調理員の <strong>両者の負担を軽減</strong> する最適化
</div>
</div>

---

<!-- _class: closing -->
<!-- _paginate: false -->

# スケーラブルなQUBOで、給食の現場を変える

<div style="margin: 32px 0;">
<div style="font-size: 1.3em; color: #5D4037; line-height: 2;">

現場の声を聞くほど、条件は増える。

増える条件に耐える **「器」** を作ることが、最初の一歩。

</div>
</div>

<div style="background: rgba(230, 81, 0, 0.1); border: 2px solid #FFAB91; border-radius: 16px; padding: 24px 40px; margin-top: 16px;">
<div style="font-size: 1.5em; font-weight: bold; color: #E65100;">

一緒に、この未来を創りませんか。

</div>
</div>

---

<!-- _paginate: false -->

## 📋 Appendix — 技術サマリー

<div style="display: flex; gap: 16px; margin-top: 8px;">

<div style="flex: 1;">

| 項目 | 値 |
|------|-----|
| レシピ数 | 295品（5カテゴリ） |
| 変数 | 二値 x[N, 2]（A/Bコース） |
| 1回のsolve変数数 | 590（固定） |
| solver | Amplify AE / Toshiba SQBM+ |
| 実行時間（M=20） | ~55秒（投機的並列） |

</div>

<div style="flex: 1;">

| QUBO制約項 | 内容 |
|:---:|------|
| H1 | カテゴリ構成（主食=1, 主菜=1 等） |
| H2 | 栄養目標（エネルギー・たんぱく質・脂質・Na） |
| H3 | コスト目標 |
| H4 | レシピ重複禁止 |
| H5 | 同日ジャンル多様化 |
| H7 | 隣接日の食材類似度抑制 |
| **H8** | **調理工程数の目標制御（独自）** |

</div>

</div>

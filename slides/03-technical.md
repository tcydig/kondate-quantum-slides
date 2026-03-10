---
marp: true
theme: kondate
paginate: true
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

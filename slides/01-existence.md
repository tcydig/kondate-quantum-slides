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

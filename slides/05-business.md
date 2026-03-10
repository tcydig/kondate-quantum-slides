---
marp: true
theme: kondate
paginate: true
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

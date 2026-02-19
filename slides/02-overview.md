---
marp: true
paginate: true
---

<style>
section {
  background: linear-gradient(135deg, #FFF9F0 0%, #FFF3E0 100%);
  color: #3E2723;
  font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic UI", sans-serif;
  padding: 50px 60px;
}
h2 {
  color: #BF360C;
  font-size: 1.7em;
  border-bottom: 3px solid #FFAB91;
  padding-bottom: 8px;
  margin-bottom: 24px;
}
h3 { color: #D84315; font-size: 1.2em; }
strong { color: #E65100; }
table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 0.85em; }
th { background: #E65100; color: #fff; padding: 10px 16px; text-align: left; }
td { padding: 10px 16px; border-bottom: 1px solid #FFCCBC; }
tr:nth-child(even) td { background: rgba(255, 171, 145, 0.15); }
pre {
  background: #3E2723; color: #FFCCBC; border-radius: 12px;
  padding: 20px 24px; font-size: 0.8em;
  box-shadow: 0 4px 12px rgba(62, 39, 35, 0.15);
}
pre code { background: none; color: inherit; padding: 0; }
code { background: rgba(255,138,101,0.12); color: #BF360C; padding: 2px 6px; border-radius: 4px; }
ul { line-height: 1.8; }
section::after { color: #BCAAA4; font-size: 0.7em; }
</style>

## 🔄 三方よしの同時最適化

<div style="display: flex; gap: 24px; justify-content: center; margin: 16px 0;">

<div style="flex: 1; text-align: center; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 24px 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 2.4em; margin-bottom: 8px;">🧒</div>
<div style="font-size: 1.1em; font-weight: bold; color: #2E7D32;">子ども</div>
<div style="font-size: 0.9em; color: #4E342E; margin-top: 8px;">栄養価の充足</div>
<div style="font-size: 0.8em; color: #666; margin-top: 4px;">成長に必要な<br>栄養バランス</div>
</div>

<div style="flex: 1; text-align: center; background: linear-gradient(180deg, #E3F2FD, #BBDEFB); border-radius: 16px; padding: 24px 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 2.4em; margin-bottom: 8px;">🏛️</div>
<div style="font-size: 1.1em; font-weight: bold; color: #1565C0;">自治体</div>
<div style="font-size: 0.9em; color: #4E342E; margin-top: 8px;">コストの最適化</div>
<div style="font-size: 0.8em; color: #666; margin-top: 4px;">限られた予算内で<br>最大の効果</div>
</div>

<div style="flex: 1; text-align: center; background: linear-gradient(180deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 24px 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 2.4em; margin-bottom: 8px;">👩‍🍳</div>
<div style="font-size: 1.1em; font-weight: bold; color: #E65100;">調理員</div>
<div style="font-size: 0.9em; color: #4E342E; margin-top: 8px;">調理負荷の軽減</div>
<div style="font-size: 0.8em; color: #666; margin-top: 4px;">無理のない<br>持続可能な現場</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

近江商人の **「三方よし」** を献立最適化に適用
— 売り手よし（調理員）・買い手よし（子ども）・世間よし（自治体）

</div>

---

## ⚙️ アプリの仕組み

<div style="display: flex; align-items: center; gap: 12px; margin: 24px 0;">

<div style="flex: 1; background: linear-gradient(135deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.1em; font-weight: bold; color: #2E7D32; margin-bottom: 12px;">📥 入力データ</div>
<div style="font-size: 0.85em; text-align: left; line-height: 2;">
・食材データベース<br>
・栄養基準値<br>
・予算制約<br>
・<strong>調理負荷データ</strong>
</div>
</div>

<div style="font-size: 2em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 24px; text-align: center; border: 2px solid #FFAB91; box-shadow: 0 4px 16px rgba(230, 81, 0, 0.15);">
<div style="font-size: 1.1em; font-weight: bold; color: #E65100; margin-bottom: 12px;">⚛️ 量子アニーリング</div>
<div style="font-size: 0.85em; line-height: 2;">
多目的最適化<br>
3つのパラメータを<br>
同時に最適化
</div>
</div>

<div style="font-size: 2em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(135deg, #E3F2FD, #BBDEFB); border-radius: 16px; padding: 24px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.1em; font-weight: bold; color: #1565C0; margin-bottom: 12px;">📤 提案結果</div>
<div style="font-size: 0.85em; text-align: left; line-height: 2;">
・最適献立案<br>
・栄養充足率<br>
・コスト試算<br>
・<strong>調理負荷スコア</strong>
</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

**調理負荷を最適化パラメータに組み込む**ことで、栄養・コスト・現場負荷のバランスが取れた献立を提案

</div>

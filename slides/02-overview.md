---
marp: true
theme: kondate
paginate: true
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

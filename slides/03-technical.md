---
marp: true
theme: kondate
paginate: true
---

## 📐 調理負荷のモデル化

<div style="text-align: center; margin-bottom: 16px; font-size: 1.05em;">

調理員の「大変さ」を **定量化** し、最適化パラメータへ

</div>

<div style="display: flex; gap: 20px;">

<div style="flex: 1.2;">

| 負荷要因 | 定量化の例 |
|---------|-----------|
| 🔪 調理工程数 | 切る・煮る・揚げる等の工程カウント |
| ⏱️ 調理時間 | 各メニューの所要時間の合計 |
| 🔀 同時並行度 | 同時に進行する工程の数 |
| 🌙 前日準備 | 仕込みが必要なメニューの有無 |

</div>

<div style="flex: 0.8; display: flex; align-items: center;">
<div style="background: #3E2723; color: #FFCCBC; border-radius: 12px; padding: 20px; font-family: monospace; font-size: 0.85em; box-shadow: 0 4px 12px rgba(62,39,35,0.15); width: 100%;">
<div style="color: #FF8A65; margin-bottom: 8px; font-weight: bold;">調理負荷スコア</div>
<div>Σ ( 工程数</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;× 時間</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;× 並行度</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;× 準備係数 )</div>
</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

数値化されていなかった **「現場の声」** を最適化の制約条件として定式化

</div>

---

## ⚛️ 量子アニーリングによる最適化

<div style="background: #3E2723; color: #FFCCBC; border-radius: 12px; padding: 20px 24px; font-family: monospace; font-size: 0.85em; margin-bottom: 20px; box-shadow: 0 4px 12px rgba(62,39,35,0.15);">
<div style="color: #FF8A65; font-weight: bold; margin-bottom: 8px;">目的関数</div>
<div>&nbsp;&nbsp;min &nbsp;α・栄養偏差 + β・コスト + γ・調理負荷</div>
<br>
<div style="color: #FF8A65; font-weight: bold; margin-bottom: 8px;">制約条件</div>
<div>&nbsp;&nbsp;・栄養基準の充足 &nbsp;・予算上限</div>
<div>&nbsp;&nbsp;・調理時間の上限 &nbsp;・食材の重複回避</div>
</div>

| 比較項目 | 古典的最適化 | 量子アニーリング |
|:---:|:---:|:---:|
| 🔍 探索空間 | 局所解に陥りやすい | 広範囲を並列探索 |
| 🎯 多目的最適化 | 計算コスト大 | 効率的に実行可能 |
| ➕ パラメータ追加 | 指数的に困難化 | 柔軟に対応可能 |

<div style="text-align: center; margin-top: 12px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

**3つの目的を同時に最適化する組合せ問題** → 量子アニーリングの強みが活きる領域

</div>

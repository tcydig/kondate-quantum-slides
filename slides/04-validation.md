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
blockquote {
  border-left: 4px solid #FF8A65;
  background: rgba(255, 138, 101, 0.08);
  padding: 12px 20px;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: #4E342E;
}
ul { line-height: 1.8; }
section::after { color: #BCAAA4; font-size: 0.7em; }
</style>

## 🎙️ 現場の声 — 調理員ヒアリング

<div style="display: flex; gap: 20px; margin-bottom: 20px;">
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">調理員Aさんの声</div>
「調理に時間がかかるメニューが多いと、<strong>早朝に出社</strong>したり<strong>前日から仕込み</strong>が必要」
</div>
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">調理員Bさんの声</div>
「献立の見直しを依頼しても<strong>『もう決まっているから変えられない』</strong>と断られる」
</div>
</div>

### 浮かび上がった4つの課題

<div style="display: flex; gap: 16px; flex-wrap: wrap;">
<div style="flex: 1; min-width: 200px; background: rgba(255,138,101,0.1); border-radius: 12px; padding: 16px; text-align: center;">
<div style="font-size: 1.6em;">⏰</div>
<div style="font-weight: bold; color: #BF360C; margin: 4px 0;">早朝出勤・前日準備</div>
<div style="font-size: 0.8em;">調理時間の多いメニューが負担に</div>
</div>
<div style="flex: 1; min-width: 200px; background: rgba(255,138,101,0.1); border-radius: 12px; padding: 16px; text-align: center;">
<div style="font-size: 1.6em;">🚫</div>
<div style="font-weight: bold; color: #BF360C; margin: 4px 0;">献立変更の拒否</div>
<div style="font-size: 0.8em;">栄養士に依頼しても通らない</div>
</div>
<div style="flex: 1; min-width: 200px; background: rgba(255,138,101,0.1); border-radius: 12px; padding: 16px; text-align: center;">
<div style="font-size: 1.6em;">⚖️</div>
<div style="font-weight: bold; color: #BF360C; margin: 4px 0;">立場の格差</div>
<div style="font-size: 0.8em;">栄養士（公務員）vs 調理員</div>
</div>
<div style="flex: 1; min-width: 200px; background: rgba(255,138,101,0.1); border-radius: 12px; padding: 16px; text-align: center;">
<div style="font-size: 1.6em;">👥</div>
<div style="font-weight: bold; color: #BF360C; margin: 4px 0;">人手不足の悪循環</div>
<div style="font-size: 0.8em;">負担 → 離職 → さらに人手不足</div>
</div>
</div>

---

## 🔄 本アプリがもたらす変化

<div style="display: flex; gap: 32px; align-items: stretch; margin: 24px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #FFEBEE, #FFCDD2); border-radius: 16px; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.2em; font-weight: bold; color: #C62828; margin-bottom: 16px;">😔 Before</div>
<div style="font-size: 0.9em; line-height: 2;">
1. 栄養士が献立を決定<br>
2. 調理員は従うだけ<br>
3. 負担・不満の蓄積<br>
4. 離職・人手不足
</div>
</div>

<div style="display: flex; align-items: center; font-size: 2.5em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 28px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.2em; font-weight: bold; color: #2E7D32; margin-bottom: 16px;">😊 After</div>
<div style="font-size: 0.9em; line-height: 2;">
1. 量子アニーリングが三方よしの献立を提案<br>
2. 調理負荷も考慮済み<br>
3. 現場の声が仕組みに反映<br>
4. 持続可能な職場環境
</div>
</div>

</div>

<div style="text-align: center; padding: 16px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

調理員の声を **「データ」** として組み込むことで、**構造的な不均衡を技術で解消する**

</div>

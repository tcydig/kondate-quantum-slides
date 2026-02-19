---
marp: true
theme: kondate
paginate: true
---

<!-- _class: title -->
<!-- _paginate: false -->

# 🍚 量子献立提案アプリ

### 量子アニーリング × 学校給食

<p class="catchcopy">三方よし — 誰も取り残さない最適化</p>

---

## 📌 学校給食の構造的課題

<div style="display: flex; gap: 32px; align-items: flex-start;">
<div style="flex: 1;">

### 技術リテラシーの格差

効率化が進んだ領域から、遅れた領域へ要求が一方的に流れる構造

```
  栄養管理・コスト管理
  （数値化・効率化済み）
        │ 要求
        ▼
  調理現場
  （人的リソースで対応）
```

</div>
<div style="flex: 1; background: rgba(255,138,101,0.1); border-radius: 16px; padding: 24px;">

### 見えないコスト

- 🔢 栄養価・コストは **数値化** されている
- 👻 調理負荷は **可視化されていない**
- 🔇 調理員の声が **構造的に反映されない**
- 🔄 負担増 → 離職 → 人手不足の **悪循環**

</div>
</div>

---

## 📊 既存手法の限界

<div style="text-align: center; margin-bottom: 16px;">

先行事例の量子アニーリング献立提案は**栄養とコストのみ**を最適化

</div>

| 最適化の観点 | 既存手法 | 本アプリ |
|:---:|:---:|:---:|
| 🥗 栄養価 | ✅ 最適化 | ✅ 最適化 |
| 💰 コスト | ✅ 最適化 | ✅ 最適化 |
| 👩‍🍳 調理負荷 | ❌ 考慮なし | ✅ **最適化** |

<div style="text-align: center; margin-top: 24px; padding: 16px; background: rgba(191, 54, 12, 0.08); border-radius: 12px; border-left: 4px solid #E65100;">

**実際に作る人の負荷が抜け落ちている**
→ 現場の疲弊と離職の悪循環は解消されない

</div>

---

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

---

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

---

## 🏢 事業モデル

<div style="display: flex; gap: 32px; align-items: flex-start;">

<div style="flex: 1; text-align: center;">
<div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 24px; border: 2px solid #FFAB91; box-shadow: 0 4px 16px rgba(230,81,0,0.12); margin-bottom: 16px;">
<div style="font-size: 2em; margin-bottom: 8px;">🏛️</div>
<div style="font-size: 1.2em; font-weight: bold; color: #E65100;">NPO法人として設立</div>
<div style="font-size: 0.85em; margin-top: 8px; color: #5D4037;">社会課題解決を主軸に</div>
</div>

<div style="font-size: 1.5em; color: #E65100;">▼</div>

<div style="background: rgba(255,138,101,0.1); border-radius: 12px; padding: 16px; margin-top: 8px;">
<div style="font-weight: bold; color: #BF360C;">自治体・教育委員会との B2G契約</div>
<div style="font-size: 0.85em; margin-top: 4px;">給食献立の最適化サービスを提供</div>
</div>
</div>

<div style="flex: 1;">

### 将来的な拡張

<div style="background: rgba(46,125,50,0.08); border-radius: 12px; padding: 20px; border-left: 4px solid #66BB6A;">

**三方よし → 四方よしへ**

4つ目のパラメータとして
**環境負荷** を追加予定

- 🌍 フードマイレージ
- ♻️ 食品ロス削減
- 🌱 地産地消の推進

</div>

</div>
</div>

---

## 📈 スケール戦略

<div style="display: flex; gap: 16px; align-items: stretch; margin: 20px 0;">

<div style="flex: 1; background: linear-gradient(180deg, #E65100, #BF360C); border-radius: 16px; padding: 24px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.2);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 1</div>
<div style="font-size: 1.3em; font-weight: bold; margin-bottom: 12px;">🏫 学校給食</div>
<div style="font-size: 0.8em; line-height: 1.6; opacity: 0.9;">
栄養基準が明確<br>
検証しやすい<br>
<strong style="color: #FFE0B2;">← 現在ここ</strong>
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.5em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #FF8A65, #E65100); border-radius: 16px; padding: 24px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.15);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 2</div>
<div style="font-size: 1.3em; font-weight: bold; margin-bottom: 12px;">🏥 病院・福祉</div>
<div style="font-size: 0.8em; line-height: 1.6; opacity: 0.9;">
同様の構造的課題<br>
を抱える領域へ<br>
横展開
</div>
</div>

<div style="display: flex; align-items: center; font-size: 1.5em; color: #E65100;">▶</div>

<div style="flex: 1; background: linear-gradient(180deg, #FFAB91, #FF8A65); border-radius: 16px; padding: 24px; color: #fff; text-align: center; box-shadow: 0 4px 12px rgba(230,81,0,0.1);">
<div style="font-size: 0.8em; opacity: 0.8; margin-bottom: 4px;">Phase 3</div>
<div style="font-size: 1.3em; font-weight: bold; margin-bottom: 12px;">🏠 家庭</div>
<div style="font-size: 0.8em; line-height: 1.6; opacity: 0.9;">
朝食・夕食の<br>
献立提案で<br>
一日を通した最適化
</div>
</div>

</div>

---

## 🌱 食育エコシステム構想

<div style="text-align: center; margin-bottom: 20px;">

献立最適化アプリを核とした、学校・家庭・地域をつなぐプラットフォーム

</div>

<div style="display: flex; gap: 20px; align-items: flex-start;">

<div style="flex: 1; background: linear-gradient(180deg, #E3F2FD, #BBDEFB); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.8em; margin-bottom: 8px;">🏫</div>
<div style="text-align: center; font-weight: bold; color: #1565C0; margin-bottom: 12px;">学校</div>
<div style="font-size: 0.82em; line-height: 1.8;">
・GIGAスクールのタブレット活用<br>
・食育動画のAI自動生成<br>
・食材・栄養クイズの自動作成<br>
・地産地消の生産農家紹介
</div>
</div>

<div style="flex: 1; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.8em; margin-bottom: 8px;">👨‍👩‍👧</div>
<div style="text-align: center; font-weight: bold; color: #2E7D32; margin-bottom: 12px;">家庭</div>
<div style="font-size: 0.82em; line-height: 1.8;">
・給食内容をリアルタイム共有<br>
・子どもが食べられた野菜の報告<br>
・地元農家から直接購入できる導線<br>
・給食 → 家庭の食卓への一貫性
</div>
</div>

<div style="flex: 1; background: linear-gradient(180deg, #FFF3E0, #FFE0B2); border-radius: 16px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="text-align: center; font-size: 1.8em; margin-bottom: 8px;">🌾</div>
<div style="text-align: center; font-weight: bold; color: #E65100; margin-bottom: 12px;">地域</div>
<div style="font-size: 0.82em; line-height: 1.8;">
・地産地消の食材活用<br>
・生産者の見える化<br>
・地域経済への貢献<br>
・食を通じたコミュニティ連携
</div>
</div>

</div>

---

## 🍚 三方よしの最適化が拓く未来

<div style="display: flex; gap: 24px; justify-content: center; margin: 24px 0;">

<div style="text-align: center; background: linear-gradient(180deg, #E8F5E9, #C8E6C9); border-radius: 50%; width: 160px; height: 160px; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.8em;">🧒</div>
<div style="font-weight: bold; color: #2E7D32; font-size: 0.9em;">栄養価</div>
<div style="font-size: 0.75em; color: #555;">子どもの成長</div>
</div>

<div style="text-align: center; font-size: 2em; color: #E65100; display: flex; align-items: center;">×</div>

<div style="text-align: center; background: linear-gradient(180deg, #E3F2FD, #BBDEFB); border-radius: 50%; width: 160px; height: 160px; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.8em;">🏛️</div>
<div style="font-weight: bold; color: #1565C0; font-size: 0.9em;">コスト</div>
<div style="font-size: 0.75em; color: #555;">自治体の予算</div>
</div>

<div style="text-align: center; font-size: 2em; color: #E65100; display: flex; align-items: center;">×</div>

<div style="text-align: center; background: linear-gradient(180deg, #FFF3E0, #FFE0B2); border-radius: 50%; width: 160px; height: 160px; display: flex; flex-direction: column; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
<div style="font-size: 1.8em;">👩‍🍳</div>
<div style="font-weight: bold; color: #E65100; font-size: 0.9em;">調理負荷</div>
<div style="font-size: 0.75em; color: #555;">現場の持続性</div>
</div>

</div>

<div style="display: flex; gap: 16px; margin-top: 20px;">
<div style="flex: 1; background: rgba(46,125,50,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #66BB6A; font-size: 0.9em;">
✅ 調理員の声を <strong>データ化</strong> し、最適化に組み込む
</div>
<div style="flex: 1; background: rgba(21,101,192,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #42A5F5; font-size: 0.9em;">
✅ 学校給食から <strong>病院・福祉・家庭</strong> へスケール
</div>
<div style="flex: 1; background: rgba(230,81,0,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #FF8A65; font-size: 0.9em;">
✅ 献立最適化を核とした <strong>食育エコシステム</strong> の構築
</div>
</div>

---

<!-- _class: closing -->
<!-- _paginate: false -->

# 量子コンピューティング × 社会課題解決

<div style="margin: 32px 0;">
<div style="font-size: 1.3em; color: #5D4037; line-height: 2;">

技術の力で、給食の現場から社会を変える。

三方よしの精神で、**誰も取り残さない最適化**を実現する。

</div>
</div>

<div style="background: rgba(230, 81, 0, 0.1); border: 2px solid #FFAB91; border-radius: 16px; padding: 24px 40px; margin-top: 16px;">
<div style="font-size: 1.5em; font-weight: bold; color: #E65100;">

一緒に、この未来を創りませんか。

</div>
</div>

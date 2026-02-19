---
marp: true
paginate: true
---

<style>
/* ===== 共通テーマ ===== */
section {
  background: linear-gradient(135deg, #FFF9F0 0%, #FFF3E0 100%);
  color: #3E2723;
  font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", "Yu Gothic UI", sans-serif;
  padding: 50px 60px;
}
h1 {
  color: #E65100;
  font-size: 2.4em;
  border-bottom: none;
  text-align: center;
  margin-bottom: 0.1em;
}
h2 {
  color: #BF360C;
  font-size: 1.7em;
  border-bottom: 3px solid #FFAB91;
  padding-bottom: 8px;
  margin-bottom: 24px;
}
h3 {
  color: #D84315;
  font-size: 1.2em;
}
strong {
  color: #E65100;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 0.85em;
}
th {
  background: #E65100;
  color: #fff;
  padding: 10px 16px;
  text-align: left;
}
td {
  padding: 10px 16px;
  border-bottom: 1px solid #FFCCBC;
}
tr:nth-child(even) td {
  background: rgba(255, 171, 145, 0.15);
}
blockquote {
  border-left: 4px solid #FF8A65;
  background: rgba(255, 138, 101, 0.08);
  padding: 12px 20px;
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: #4E342E;
}
code {
  background: rgba(255, 138, 101, 0.12);
  color: #BF360C;
  padding: 2px 6px;
  border-radius: 4px;
}
pre {
  background: #3E2723;
  color: #FFCCBC;
  border-radius: 12px;
  padding: 20px 24px;
  font-size: 0.8em;
  box-shadow: 0 4px 12px rgba(62, 39, 35, 0.15);
}
pre code {
  background: none;
  color: inherit;
  padding: 0;
}
ul, ol {
  line-height: 1.8;
}
li {
  margin-bottom: 4px;
}
footer {
  color: #BCAAA4;
  font-size: 0.65em;
}

/* ===== タイトルスライド ===== */
section.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 40%, #FFCC80 100%);
}
section.title h1 {
  font-size: 2.8em;
  margin-bottom: 0;
  text-shadow: 0 2px 8px rgba(230, 81, 0, 0.1);
}
section.title h3 {
  font-size: 1.3em;
  color: #5D4037;
  font-weight: 400;
  margin-top: 8px;
}
section.title p.catchcopy {
  font-size: 1.5em;
  color: #BF360C;
  margin-top: 24px;
  padding: 12px 32px;
  border: 2px solid #FFAB91;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.6);
}

/* ===== ページ番号 ===== */
section::after {
  color: #BCAAA4;
  font-size: 0.7em;
}
</style>

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

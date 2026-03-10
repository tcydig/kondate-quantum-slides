---
marp: true
theme: kondate
paginate: true
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

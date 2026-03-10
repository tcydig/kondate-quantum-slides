---
marp: true
theme: kondate
paginate: true
---

## 🎙️ 現場の声が設計を変えた

<div style="display: flex; gap: 20px; margin-bottom: 16px;">
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">栄養士へのヒアリング</div>
「給食はA/Bの<strong>複数コース</strong>が前提。1コースだけの最適化では使えない」
</div>
<div style="flex: 1; border-left: 4px solid #FF8A65; background: rgba(255,138,101,0.08); padding: 16px 20px; border-radius: 0 12px 12px 0;">
<div style="font-size: 0.8em; color: #BF360C; font-weight: bold; margin-bottom: 8px;">調理員へのヒアリング</div>
「調理に時間がかかるメニューが多いと<strong>早朝出社や前日仕込み</strong>が必要になる」
</div>
</div>

<div style="display: flex; gap: 16px;">

<div style="flex: 1; background: rgba(191,54,12,0.06); border-radius: 12px; padding: 16px;">
<div style="font-weight: bold; color: #BF360C; margin-bottom: 8px;">既存研究との乖離</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・複数コースの存在を想定していない<br>
・調理員の負荷が考慮されていない<br>
→ 既存QUBOをそのまま流用できない
</div>
</div>

<div style="flex: 1; background: rgba(191,54,12,0.06); border-radius: 12px; padding: 16px;">
<div style="font-weight: bold; color: #BF360C; margin-bottom: 8px;">実用上の課題</div>
<div style="font-size: 0.88em; line-height: 1.8;">
・20日×300品で変数数6,000に膨張<br>
・解の品質が不安定・実行時間も実用外<br>
→ 条件が増えるほど悪化する構造
</div>
</div>

</div>

<div style="text-align: center; margin-top: 16px; padding: 12px; background: rgba(191, 54, 12, 0.08); border-radius: 12px;">

ヒアリングの結果、**既存QUBOの改良ではなく、スケーラブルな再設計が必要**と判断

</div>

---

## 📊 実測パフォーマンス

<div style="text-align: center; margin-bottom: 16px;">

レシピ数 N=295、M=20日（A/Bコース同時最適化）での実測結果

</div>

| 方式 | 変数数 | 実行時間 | 短縮率 | solver |
|:---:|:---:|:---:|:---:|:---:|
| M日一括 | 5,900 | ~120秒 | — | AE |
| 逐次 | 590（固定） | ~70秒 | 42%短縮 | AE |
| **投機的並列** | **590（固定）** | **~55秒** | **54%短縮** | **AE + SQBM+** |

<div style="display: flex; gap: 20px; margin-top: 20px;">

<div style="flex: 1; background: rgba(46,125,50,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #66BB6A;">
<div style="font-weight: bold; color: #2E7D32; margin-bottom: 6px;">変数空間の固定化</div>
<div style="font-size: 0.85em;">変数数はN×2で日数Mに非依存。N=500品でも1,000変数に収まり、条件が増えても破綻しない</div>
</div>

<div style="flex: 1; background: rgba(230,81,0,0.08); border-radius: 12px; padding: 16px; border-left: 4px solid #FF8A65;">
<div style="font-weight: bold; color: #E65100; margin-bottom: 6px;">実行時間の半減</div>
<div style="font-size: 0.85em;">一括方式の120秒から55秒へ。2台のアニーリングマシンの待ち時間を重畳し、さらなる短縮を実現</div>
</div>

</div>

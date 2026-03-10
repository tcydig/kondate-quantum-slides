
# 🍱 kondate-quantum-deck

> **Quantum-speed slide crafting with Marp.**\
> 献立（構成）を量子的な速さでスライドへ。Marpを用いたチーム専用プレゼンテーション管理リポジトリです。

------------------------------------------------------------------------

## 🚀 はじめに (Getting Started)

このプロジェクトは [Marp](https://marp.app/)
を使用して、Markdownからスライドを生成します。チーム全員が同じ環境で執筆・出力できるように構成されています。

### 1. 環境構築

まず、リポジトリをクローンして依存関係をインストールしてください。

``` bash
git clone https://github.com/your-organization/kondate-quantum-deck.git
cd kondate-quantum-deck
npm install
```

### 2. 推奨ツール

VS Code
を使用している場合、推奨拡張機能のインストール通知が表示されます。

-   Marp for VS Code（リアルタイムプレビュー & エクスポート）

------------------------------------------------------------------------

## 🛠 コマンド (Scripts)

npm run を使用して、執筆や書き出しを行います。

| コマンド | 内容 |
| --- | --- |
| `npm run watch` | スライド変更を監視し、all.md自動生成 & プレビュー |
| `npm run build` | all.md をマージして PPTX を output/ に生成 |
| `npm run build -- pdf` | all.md をマージして PDF を output/ に生成 |
| `npm run build -- png` | all.md をマージして PNG を output/ に生成 |
| `npm run merge` | all.md を手動で再生成 |

------------------------------------------------------------------------

## 📂 ディレクトリ構成

``` text
.
├── slides/                # スライド本体 (.md)
│   ├── 01-existence.md    #   存在意義
│   ├── 02-overview.md     #   アプリ概要
│   ├── 03-technical.md    #   技術的アプローチ
│   ├── 04-validation.md   #   現場検証・パフォーマンス
│   ├── 05-business.md     #   ロードマップ・展開
│   ├── 06-summary.md      #   まとめ・Appendix
│   └── all.md             #   ↑を結合した完成版（自動生成）
├── scripts/
│   ├── merge.js           # slides/*.md → all.md を結合するスクリプト
│   └── build.js           # Marp CLIでall.mdをPPTX/PDF/PNGに変換
├── themes/
│   └── kondate.css        # Marp用カスタムテーマ
├── docs/
│   └── presentation-brief.md  # プレゼン企画・構成ブリーフ
├── output/                # 書き出し結果 (Git管理外)
├── .github/workflows/
│   ├── ci.yml             # PR時にall.mdの整合性を検証
│   └── release.yml        # タグ push (v*) で PPTX を自動ビルド＆GitHub Release
├── .vscode/               # VS Code共有設定（Marp拡張推奨）
├── .marprc.yml            # Marp設定（テーマディレクトリ指定）
└── package.json           # 依存・スクリプト定義
```

### スライド生成の流れ

``` text
slides/01〜06.md  →  merge.js  →  slides/all.md  →  Marp CLI  →  output/all.pptx
```

### GitHub Actions

| ワークフロー | トリガー | 内容 |
| --- | --- | --- |
| **CI** (`ci.yml`) | PRが `main` に向けて作成されたとき | `npm run merge` を実行し、`all.md` がコミット済みの内容と一致するか検証 |
| **Release** (`release.yml`) | `v*` タグが push されたとき | 日本語フォント(Noto CJK)をインストール → PPTX をビルド → GitHub Release にアップロード |

------------------------------------------------------------------------

## 🤝 チーム運用ルール (Branch Strategy)

GitHub Flow を採用しています。

-   main: 正式版（直接Push禁止）
-   feature/xxx: 各自作業ブランチ

Pull Request を作成し、1 Approve 後に main へマージしてください。

------------------------------------------------------------------------

## 📡 連絡事項

不明点があればDiscordにてご連絡を！

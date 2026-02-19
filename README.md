
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

  コマンド                内容
  ----------------------- -----------------------------------------------
  npm run watch           スライド変更を監視し、all.md自動生成 & プレビュー
  npm run build           all.md をマージして PPTX を output/ に生成
  npm run build -- pdf    all.md をマージして PDF を output/ に生成
  npm run build -- png    all.md をマージして PNG を output/ に生成
  npm run merge           all.md を手動で再生成

------------------------------------------------------------------------

## 📂 ディレクトリ構成

``` text
.
├── slides/          # スライド本体 (.md)
├── themes/          # カスタムCSS
├── output/          # 書き出し結果 (Git管理外)
├── .vscode/         # VS Code共有設定
└── package.json     # 依存・スクリプト
```

------------------------------------------------------------------------

## 🤝 チーム運用ルール (Branch Strategy)

GitHub Flow を採用しています。

-   main: 正式版（直接Push禁止）
-   feature/xxx: 各自作業ブランチ

Pull Request を作成し、1 Approve 後に main へマージしてください。

------------------------------------------------------------------------

## 📝 執筆のヒント

Marp の基本スライド区切りは `---` です。

``` markdown
---
marp: true
theme: default
paginate: true
header: "kondate-quantum project"
footer: "Confidential"
---

# スライド1枚目
- 箇条書き
- 献立（Kondate）

---

# スライド2枚目
量子（Quantum）的なスピードで作成中...
```

------------------------------------------------------------------------

## 📡 連絡事項

不明点があればDiscordにてご連絡を！

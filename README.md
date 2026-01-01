# X-Border Agent - AI Coaching & Consulting Website

## 🚀 プロジェクト概要

X-Border Agentの公式ウェブサイト。AI活用コンサルティングサービスを提供する企業向けのモダンなコーポレートサイトです。

## 📁 正しいファイル構造

```
project-root/
├── index.html              # メインHTMLファイル（ルートに配置）
├── css/
│   └── style.css          # スタイルシート
├── js/
│   └── main.js            # JavaScriptファイル
├── images/
│   └── ceo-photo.jpg      # CEO写真
└── README.md              # このファイル
```

## ⚠️ 重要：GitHubへの正しいアップロード方法

### 方法A: GitHub Web UIを使用（最も簡単で確実）

1. **リポジトリを空にする**
   - 既存のファイルを全て削除

2. **ルートファイルをアップロード**
   ```
   - index.html をリポジトリのルート（トップページ）にドラッグ&ドロップ
   ```

3. **フォルダ付きファイルをアップロード**
   - "Add file" → "Create new file" をクリック
   - ファイル名の欄に `css/style.css` と入力（スラッシュを含める）
   - ファイル内容を貼り付けてコミット
   - 同様に以下を作成：
     - `js/main.js`
     - `images/ceo-photo.jpg`

### 方法B: ローカルで構造を作ってアップロード

1. **ローカルに新しいフォルダを作成**
   ```
   mkdir x-border-agent
   cd x-border-agent
   ```

2. **このプロジェクトから以下のファイルをダウンロード**
   - GenSpark の LS ボタン → 各ファイルをダウンロード
   - ダウンロードしたファイルを上記の構造通りに配置

3. **正しい構造を確認**
   ```
   x-border-agent/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── main.js
   └── images/
       └── ceo-photo.jpg
   ```

4. **Git経由でアップロード**
   ```bash
   git init
   git add .
   git commit -m "Initial commit with correct structure"
   git branch -M main
   git remote add origin [あなたのリポジトリURL]
   git push -u origin main
   ```

### 方法C: GitHub Desktopを使用

1. GitHub Desktopで新しいリポジトリを作成
2. ローカルフォルダに上記の構造でファイルを配置
3. GitHub Desktopで変更をコミット＆プッシュ

## 🔍 トラブルシューティング

### 404エラーが出る場合

**原因**: ファイルパスが正しくない

**解決方法**:
1. GitHubリポジトリで実際のファイル構造を確認
2. `css/style.css` が `css` フォルダの中に存在することを確認
3. `js/main.js` が `js` フォルダの中に存在することを確認
4. `images/ceo-photo.jpg` が `images` フォルダの中に存在することを確認

### CSSが適用されない場合

**確認事項**:
- ブラウザのキャッシュをクリア（Ctrl+Shift+R）
- DevToolsのConsoleタブで404エラーがないか確認
- ファイル名の大文字・小文字が一致しているか確認

### 画像が表示されない場合

**確認事項**:
- `images/ceo-photo.jpg` のパスが正確か確認
- 画像ファイルが正しくアップロードされているか確認
- ファイル拡張子が `.jpg` になっているか確認

## 🎨 主な機能

### 実装済み機能

1. **レスポンシブデザイン**
   - スマートフォン、タブレット、デスクトップ対応
   - モバイルメニュー実装

2. **セクション構成**
   - ヒーローセクション（トップビジュアル）
   - Aboutセクション（会社概要）
   - Servicesセクション（サービス紹介）
   - Pricingセクション（料金プラン）
   - Resultsセクション（導入実績）
   - Teamセクション（チーム紹介）
   - Bookingセクション（予約フォーム）
   - Contactセクション（お問い合わせ）

3. **インタラクティブ機能**
   - スムーススクロール
   - ナビゲーションハイライト
   - アニメーション効果
   - モーダルウィンドウ（予約・お問い合わせ）
   - フォームバリデーション

4. **アナリティクス**
   - Google Analytics 4 統合
   - カスタムイベントトラッキング

### 未実装機能

1. **バックエンド連携**
   - フォーム送信のサーバー処理
   - データベース連携
   - 予約システムの実装

2. **追加コンテンツ**
   - ブログセクション
   - 事例紹介詳細ページ
   - お客様の声セクション

3. **多言語対応**
   - 英語版サイト
   - 言語切り替え機能

## 🔧 技術スタック

- **HTML5**: セマンティックマークアップ
- **CSS3**: カスタムプロパティ、Flexbox、Grid、アニメーション
- **JavaScript (Vanilla)**: DOM操作、イベントハンドリング
- **Google Fonts**: Inter, Poppins
- **Google Analytics 4**: アクセス解析

## 📝 推奨される次のステップ

1. **Google Analytics IDの設定**
   - `index.html` の `G-XXXXXXXXXX` を実際のIDに置き換え

2. **バックエンドAPI連携**
   - フォーム送信処理の実装
   - メール送信機能の追加

3. **パフォーマンス最適化**
   - 画像の最適化・圧縮
   - CSS/JSのミニファイ
   - レイジーローディングの実装

4. **SEO対策**
   - メタタグの最適化
   - OGPタグの追加
   - sitemap.xmlの作成

5. **アクセシビリティ向上**
   - ARIAラベルの追加
   - キーボードナビゲーション対応
   - コントラスト比の確認

## 📞 サポート

ウェブサイトに関する質問やサポートが必要な場合：
- Email: inquiry@x-borderagent.com

## 📄 ライセンス

© 2024 X-Border Agent. All rights reserved.

---

**最終更新日**: 2024年12月31日

# electron-react-app-tutorial

Electron上でReact.jsを使ったアプリケーションのテストプログラム

## 準備

1. アプリケーションフォルダを作成する


  最初はReactアプリとしてフォルダを作成する

  ```bash
  $ create-react-app `{アプリケーション名}`
  ```

2. Electronに必要なパッケージをインストールする

```bash
$ cd `{アプリケーション名}`
$ npm i cross-env electron electron-builder npm-run-all wait-on -D
# 多分、不要なパッケージが含まれている
```

3. Electronのメインスクリプトを`/public`フォルダ内に作成する


4. Reactをビルドし、Electronをビルドする

```bash
$ npm run react-build
$ npm run electron-build
```

5. スタートする

```bash
$ npm run electron-start
```


## 参考サイト

[React アプリを Electron でデスクトップアプリ化する](https://absarcs.info/how-to/turning-react-apps-into-desktop-apps-with-electron/)
[ようこそ！Electron入門](https://qiita.com/umamichi/items/6ce4f46c1458e89c4cfc)
[VSCodeでReactをデバッグする方法](https://qiita.com/keisukeengineer/items/cb64984597d2aa5a3952)
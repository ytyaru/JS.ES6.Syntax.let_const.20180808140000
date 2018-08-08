# このソフトウェアについて

JavaScript(ES6)でlet, constを使う。[demo](https://ytyaru.github.io/JS.ES6.Syntax.let_const.20180808140000)

# 概要

キーワード|再宣言|再代入|スコープ
----------|------|------|--------
var|o|o|関数スコープ
let|x|o|ブロックスコープ
const|x|x|ブロックスコープ

## ベストプラクティス

* 原則`var`は使わない
* 変数宣言は基本的に`const`
* 再代入が必要なときだけ`let`を使う

# 最小コード

main.js
```javascript
var v= 0
let l = 0;
const c = 0;
{
    var v = 1;
    let l = 1;
    const c = 1;
}
alert("var: " + v + "\n"
    + "let: " + l + "\n"
    + "const: " + c + "\n");
```

上記コードを実行したとき、`v`, `l`, `c`の値はいくつになるか。答えは以下。

```
var: 1
let: 0
const: 0
```

# 開発環境

* [Raspberry Pi](https://ja.wikipedia.org/wiki/Raspberry_Pi) 3 Model B
    * [Raspbian](https://www.raspberrypi.org/downloads/raspbian/) GNU/Linux 8.0 (jessie)
        * Chromium 56.0.2924.84 Built on Ubuntu 14.04, running on Raspbian 8.0

# ライセンス

このソフトウェアはCC0ライセンスである。

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png "CC0")](http://creativecommons.org/publicdomain/zero/1.0/deed.ja)


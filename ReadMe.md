# このソフトウェアについて

JavaScript(ES6)でlet, constを使う。[demo](https://ytyaru.github.io/JS.ES6.Syntax.let_const.20180808140000)

# 変数の宣言

キーワード|再宣言|再代入|スコープ|コード例
----------|------|------|--------|--------
(なし)|o|o|グローバル|`x = 0;`, `function(){ x = 0; }`
`var`|o|o|グローバル or ローカル|`var x = 0;` or `function(){ var x = 0; }`
`let`|x|o|ブロック|`let x = 0;`, `function(){ let = 0; }`, `{ let x = 0; }` ( `if (1) { let x = 0; }`, `for (let x = 0; ...) {...}` ...)
`const`|x|x|ブロック|(`let`と同様)

## スコープ

スコープ|説明
--------|----
グローバル|どこからでも参照可。
ローカル|関数内のみ参照可。`function(){...}`
ブロック|ブロック内のみ参照可。`{...}`, `if(){...}`, `function(){...}`, ...

スコープが広いとカプセル化できない。変数を誤操作してしまう。名前重複してしまう。

とくにグローバルスコープは名前空間の汚染といわれバグの元になりやすい。コードの規模が大きくなるほど、変数のスコープは小さくすべき。

## ベストプラクティス

* `"use strict";`で代入式`x = 0;`等による暗黙のグローバル変数宣言を回避する
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


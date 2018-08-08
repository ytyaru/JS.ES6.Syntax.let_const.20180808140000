"use strict";
// "use strict"; によって誤ってグローバル変数宣言されてしまうことを防ぐ
//g = 0; // Uncaught ReferenceError: g is not defined

var v = 1;
let l = 1;
const c = 1;

const msg = "var: " + v + "\n"
            + "let: " + l + "\n"
            + "const: " + c + "\n"
console.log(msg);
alert("use strict. " + "\n" + msg);

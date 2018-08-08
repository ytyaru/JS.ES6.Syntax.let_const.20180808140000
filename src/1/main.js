"use strict";
// "use strict"; によって誤ってグローバル変数宣言されてしまうことを防ぐ
g = 0; // Uncaught ReferenceError: g is not defined
alert(g);

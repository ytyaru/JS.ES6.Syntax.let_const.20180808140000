var v= 0;
let l = 0;
const c = 0;

var v = 1;
//let l = 1;  // Uncaught SyntaxError: Identifier 'l' has already been declared
//const c = 1; // Uncaught SyntaxError: Identifier 'c' has already been declared

v = 2;
l = 2;
//c = 2; // Uncaught TypeError: Assignment to constant variable.

alert("var: " + v + "\n"
    + "let: " + l + "\n"
    + "const: " + c + "\n");

{
    v = 3;
    l = 3;
//    c = 1; // Uncaught TypeError: Assignment to constant variable.
    alert("var: " + v + "\n"
        + "let: " + l + "\n"
        + "const: " + c + "\n");

}

alert("var: " + v + "\n"
    + "let: " + l + "\n"
    + "const: " + c + "\n");

{
    var v = 4;
    let l = 4;    
    const c = 4;
    alert("var: " + v + "\n"
        + "let: " + l + "\n"
        + "const: " + c + "\n");

}

alert("var: " + v + "\n"
    + "let: " + l + "\n"
    + "const: " + c + "\n");


const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  let n=0
for (var i=0;i<5;i++){
if(mtrx(v-1)[i] == 1){
  n++;
                  }
                    }
return n
}

function degreecentrality(mtrx,v){
return degree(mtrx,v)/(mtrx().length-1)
}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));

console.log(A().length)

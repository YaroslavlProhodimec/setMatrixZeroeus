git remote add origin git@github.com:YaroslavlProhodimec/setMatrixZeroeus.git// let matrix = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1]
// ];
let matrix = [
  [0, 1, 2,0],
  [3, 4, 5,2],
  [1, 3, 1,5]
];


const setMatrixZero = (inputOne) => {
  let rowLength = inputOne.length;
  let columnLength = inputOne[0].length;
  let isColumnZero = false;

  for (let R = 0; R < rowLength; R++) {
    if (inputOne[R][0] === 0) {
      isColumnZero = true;
    }
    for (let C = 1; C < columnLength; C++) {
      if (inputOne[R][C] === 0) {
        inputOne[R][0] = 0;
        inputOne[0][C] = 0;
      }
    }

  }
  for (let R = 1; R < rowLength; R++) {
    for (let C = 1; C < columnLength; C++) {
      if (inputOne[R][0] === 0 || inputOne[0][C] === 0) {
        inputOne[R][C] = 0
      }
    }
  }

  for (let C = 0; C < columnLength; C++) {
      if(inputOne[0][0] === 0){
        inputOne[0][C] = 0
       }
  }
   
  if(isColumnZero){
     for (let R = 0; R < rowLength;R++) {
       inputOne[R][0] = 0
     }
   }
return inputOne
};


console.log(setMatrixZero(matrix));


//
// const setZeroes = (mat) => {
//   let rowsLength = mat.length;
//   let colLength = mat[0].length;
//   let isCol = false
//
//   for (let R = 1; R < rowsLength; R++) {
//    if (mat[R][0] === 0) {
//      isCol = true
//    }
//    for (let C = 1; C < colLength; C++) {
//         if (mat[R][C] === 0){
//           mat[R][0] = 0
//           mat[0][C] = 0
//         }
//     };
//   }
//   for (let R = 1; R < rowsLength; R++) {
//     for (let C = 1; C < colLength; C++) {
//          if ( mat[R][0] === 0 || mat[0][C] === 0 ){
//            mat[R][C] = 0
//          }
//     }
//   }
//   for (let R = 1; R < rowsLength; R++) {
//     for (let C = 1; C < colLength; C++) {
//       if ( mat[R][0] === 0){
//         mat[R][0] = 0
//       }
//     }
//   }
//   for (let R = 1; R < rowsLength; R++) {
//     for (let C = 1; C < colLength; C++) {
//       if ( mat[0][C] === 0){
//         mat[0][C] = 0
//       }
//     }
//   }
//   return mat
// };
//
// console.log(setZeroes(matrix));

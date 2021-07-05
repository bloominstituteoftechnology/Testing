module.exports = {
  add,
  multiply,
};

function multiply(a, b) {
  return a * b;
}

function add(a, b) {
  const v1 = a || 0;
  const v2 = b || 0;

  return v1 + v2;
}

// function add(a = 0, b = 0) {
//   let v1 = a;
//   let v2 = b;

//   if (typeof a === 'string') {
//     if (!Number(a)) {
//       return false;
//     } else {
//       v1 = Number(a);
//     }
//   }
//   if (typeof b === 'string') {
//     if (!Number(b)) {
//       return false;
//     } else {
//       v2 = Number(b);
//     }
//   }
//   return v1 + v2;
// }

// function add(a, b) {
//   return Number(a) + Number(b) || false;
// }

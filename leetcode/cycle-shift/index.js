// 循环移位
// [1, 2, 3, 4, 5, 6, 7] k=3
// 7, 1, 2, 3, 4, 5, 6
// 6, 7, 1, 2, 3, 4, 5
// 5, 6, 7, 1, 2, 3, 4

var arr = [-1, -100, 3, 99], k = 2

// 方法一
// function RShift (list, k) {
//   const copy = [...list]
//   const n = list.length
//   // 如果 k 的值为 arr 长度的整数倍 该数组在循环移位之后不变
//   if (k % n === 0) return
//   for (let i = 0; i < n; i++) {
//     list[i] = copy[(k + i) % n]
//     // console.log(list)
//   }
//   return list
// }
// console.log(RShift(arr, k))


// 方法二
// function RShift (list, k) {
//   const n = list.length
//   if (k % n === 0) {
//     return list
//   }
//   let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
//   let t = null
//   while (cnt--) {
//     t = list[n-1]
//     // 右移一位
//     for (let i = n - 1; i > 0; i--) {
//       list[i] = list[i - 1]
//       // console.log(list)
//     }
//     list[0] = t
//     // console.log(list)
//   }
//   return list
// }
// console.log(RShift(arr, k))



// 三次翻转法
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]

//[1, 2, 3, 4, 5, 6, 7] => [6, 7, 1, 2, 3, 4, 5]
//[5, 4, 3, 2, 1, 6, 7]
//[5, 4, 3, 2, 1, 7, 6]
//[6, 7, 1, 2, 3, 4, 5]


// 方法三
function reverse(list, start, end) {
  let t = null
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start++
    end--
  }
}

function RShift (list, k) {
  const n = list.length
  if (k % n === 0) {
    return list
  }
  reverse(list, 0, n-k-1)
  console.log(list)
  reverse(list, n-k, n-1)
  console.log(list)
  reverse(list, 0, n-1)
  console.log(list)
  return list
}
console.log(RShift(arr, k))
var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 递归+前序遍历
// var preOrder = function (node) {
//   if (node) {
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)

// 递归+中序遍历
// var preOrder = function (node) {
//   if (node) {
//     preOrder(node.left)
//     console.log(node.value)
//     preOrder(node.right)
//   }
// }
// preOrder(tree)

// 递归+后序遍历
// var preOrder = function (node) {
//   if (node) {
//     preOrder(node.left)
//     preOrder(node.right)
//     console.log(node.value)
//   }
// }
// preOrder(tree)


// 深度优先
var preOrderUnRecur = function (node) {
  if (!node) {
    throw new Error('Empty Tree')
  }
  var stack = []
  stack.push(node)
  while (stack.length !== 0) {
    node = stack.pop()
    console.log(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
}
preOrderUnRecur(tree)

// 广度优先
// function breadthFirstUnRecur (node) {
//   let queue = []
//   queue.push(node)
//   while (queue.length !== 0) {
//     let node = queue.shift()
//     console.log(node.value)
//     if (node.left) {
//       queue.push(node.left)
//     }
//     if (node.right) {
//       queue.push(node.right)
//     }
//   }
// }
// breadthFirstUnRecur(tree)

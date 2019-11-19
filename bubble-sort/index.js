var test = [5, 4, 3, 2, 1];

function bubbleSort (arr) {
  //轮数
  for (let i = 0; i < arr.length - 1; i++) {
    //次数
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //借助第三个变量进行交换值
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(test));
// 在这里验证算法，可以接受命令行传来的参数

class Example {
  sort() {

  }

  less(i, j) {
    // 比较
    return (i < j);
  }

  exch(arr, i, j) {
    // 交换
    let t;
    t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  show(arr) {
    // 打印
    let i = 0;
    let len = arr.length;
    for (i; i < len; i++) {
      console.log(arr[i])
    }
  }

  isSorted(arr) {
    // 是否有序
  }
}
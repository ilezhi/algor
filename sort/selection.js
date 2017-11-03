/**
 * 选择排序
 * 找到数组中最小的元素，
 * 将它与数组第一个元素交换位置
 * 在剩余的元素中找到最小元素
 * 将它与数组第二个元素交换位置
 * 直到将整个数组排序
 */

class Selection {
  sort(arr) {
    console.log(`起始数据 : ${arr.join(' ')}`)
    let N = arr.length;
    let i = 0;
    for (i; i < N; i++) {
      let min = i;
      let j = i + 1;
      for (j; j < N; j++) {
        if (this.less(arr[j], arr[min])) {
          min = j;
        }
      }
      
      console.log(`第${i}次交换: ${arr.join(' ')}`)
      this.exch(a, i, min);
    }
  }

  less(i, j) {
    // 比较
    // console.log(`比较的数为${i}和${j}`);
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


let s = new Selection();
let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
s.sort(a);
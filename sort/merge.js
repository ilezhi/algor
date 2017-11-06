/**
 * 归并排序
 * 将两个有序的数组归并成一个更大的数组
 * 
 */
let a = ['M', 'E', 'R', 'G', 'E', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];

let aux = new Array(16);

class Merge {
  sort(arr) {
    this.mergeTD(arr, 0, a.length - 1);
  }

  // 原地归并
  // 0, 0, 1
  merge(arr, lo, mid, hi) {
    let i = lo;
    let j = mid + 1;

    for (let k = lo; k <= hi; k++) {
      aux[k] = arr[k];
    }

    for (let k = lo; k <= hi; k++) {
      if (i > mid) { // 左数组全部比较完判断条件
        arr[k] = aux[j++];
      } else if (j > hi) {    // 右数组全部比较完判断条件
        arr[k] = aux[i++];
      } else if (this.less(aux[j], aux[i])) {   // 左右数组比较
        arr[k] = aux[j++];
      } else {
        arr[k] = aux[i++];
      }
    }
  }

  // 控制merge调用的顺序
  // top-to-down
  mergeTD(arr, lo, hi) {
    if (hi <= lo) return;

    let mid = lo + Math.floor((hi - lo) / 2);
    
    this.mergeTD(arr, lo, mid);
    this.mergeTD(arr, mid + 1, hi);

    this.merge(arr, lo, mid, hi);
  }

  // donw-to-top
  mergeDT(arr) {
    let N = arr.length;
    for (let sz = 1; sz < N; sz = sz + sz) {    // 控制子数组大小,1 2 4 8 16
      for (let lo = 0; lo < N - sz; lo += sz + sz) {    // lo 子数组位置
        this.merge(arr, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, N - 1));
      }
    }
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
    console.log(arr.join(' '));
  }

  isSorted(arr) {
    // 是否有序
  }
}


var m = new Merge();

m.mergeDT(a);
m.show(a);
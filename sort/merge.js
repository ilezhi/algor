const Sort = require('../main');
/**
 * 归并排序
 * 将两个有序的数组归并成一个更大的数组
 * 
 */

class Merge extends Sort {
  sort(a) {
    let len = a.length;
    this.aux = new Array(len);
    this.mergeTopDown(a, 0, len);
  }

  merge(a, lo, mid, hi) {
    let i = lo;
    let j = mid + 1;
    let aux = this.aux;
    for (let k = lo; k <= hi; k++) {
      aux[k] = a[k];
    }

    for (let k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = aux[j++];
      } else if (j > hi) {
        a[k] = aux[i++];
      } else if (this.less(aux[j], aux[i])) {
        a[k] = aux[j++];
      } else {
        a[k] = aux[i++]
      }
    }
  }

  mergeTopDown(a, lo, hi) {
    if (hi <= lo) {
      return;
    }

    let mid = lo + Math.floor((hi - lo) / 2);

    this.mergeTopDown(a, lo, mid);
    this.mergeTopDown(a, mid + 1, hi);
    this.merge(a, lo, mid, hi);
  }

  mergeDownTop(a) {
    let len = a.length;
    this.aux = new Array(len);
    for (let sz = 1; sz < len; sz = sz + sz) {    // 控制子数组大小,1 2 4 8 16
      for (let lo = 0; lo < len - sz; lo += sz + sz) {    // lo 子数组位置
        this.merge(a, lo, lo + sz - 1, Math.min(lo + sz + sz - 1, len - 1));
      }
    }
  }
}

let a = ['M', 'E', 'R', 'G', 'E', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
var m = new Merge();

// m.sort(a);
m.mergeDownTop(a);
m.show(a);
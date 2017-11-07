const Sort = require('../main');

/**
 * 选择排序
 * 找到数组中最小的元素，
 * 将它与数组第一个元素交换位置
 * 在剩余的元素中找到最小元素
 * 将它与数组第二个元素交换位置
 * 直到将整个数组排序
 */

class Selection extends Sort {
  sort(a) {
    let len = a.length;
    let i = 0;

    for (i; i < len; i++) {
      let min = i;
      let j = i + 1;
      for (j; j < len; j++) {
        if (this.less(a[j], a[min])) {
          min = j;
        }
      }

      this.exch(a, i, min);
    }
  }
}


let s = new Selection();
let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
s.sort(a);
s.show(a);
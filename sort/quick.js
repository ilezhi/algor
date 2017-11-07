const Sort = require('../main');
/**
 * 快速排序
 * 1. 在给定的数组a中找到任意一个数(通常为第一个元素)，称之为切分元素，
 * 2. 从数组左边和右边开始扫面数组
 * 3. 找到左边第一个大于切分元素，找到右边第一个小于切分元素,i,j互换
 * 4. 当i >= j时，a[j]和a[0]互换。切分元素的位置就是最终排序的位置
 * 5. 对切分元素左边和右边的数组分别执行以上步骤。
 */

class Quick extends Sort {
  sort(a) {
    this.quick(a, 0, a.length - 1);
  }

  quick(a, lo, hi) {
    if (hi <= lo) {
      return;
    }

    let j = this.partition(a, lo, hi);
    this.quick(a, lo, j - 1);
    this.quick(a, j + 1, hi);
  }

  partition(a, lo, hi) {
    let i = lo;         // 左扫描指针
    let j = hi + 1;     // 右扫描指针
    let v = a[lo];      // 切分元素

    while (true) {
      // 如果a[i]小于v，则继续扫描，直到扫描整个数组
      while (this.less(a[++i], v)) {
        if (i === hi) {
          break;
        }
      }

      // 如果a[j]大于v, 则继续扫描，知道扫描整个数组
      while (this.less(v, a[--j])) {
        if (j === lo) {
          break;
        }
      }
      // 经过上面两个循环，已经找到大于v的a[i]和小于v的a[j];

      // 元素全部交换完
      if (i >= j) {
        break;
      }

      this.exch(a, i, j);
    }

    // 此处将切分元素放到最终的位置上
    this.exch(a, lo, j);
    return j;   // 返回切分位置，是为了继续找到切分元素两侧的子数组中的切分元素

  }
}


/**               0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15
 * lo   j    hi   Q  U  I  C  K  S  O  R  T  E  X  A  M  P  L  E
 *                K  R  A  T  E  L  E  P  U  I  M  Q  C  X  O  S
 * 0    5    15   E  C  A  I  E  K  L  P  U  T  M  Q  R  X  O  S
 * 0         4    E  C  A  I  E
 * 3         4
 *                E  C  A  E  I
 * 0    3    4    E  C  A  E
 * 0         2    E  C  A
 * 
 */

let q = new Quick();
let a = ['Q', 'U', 'I', 'C', 'K', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
q.sort(a);
q.show(a);
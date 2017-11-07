const Sort = require('../main');
/**
 * 插入排序
 * 
 * 在元素插入的时候排序，其余的元素都需要右移
 * 打扑克牌时就是插入排序的例子
 * 
 */

class Insertion extends Sort {
  sort(a) {
    let len = a.length;
    let i = 1;

    for (i; i < len; i++) {
      let j = i;
      for (j; j > 0 && this.less(a[j], a[j-1]); j--) {
        this.exch(a, j, j-1);
      }
    }
  }
}

let s = new Insertion();
let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
s.sort(a);
s.show(a);

/**
 * i  j  S O R T E X A M P L E
 * i = 1 时， 外层获取O, 内层用O和 S(j-1)比较, 交换, j--后 不满足条件，返回外层循环
 * 1  0  O S
 * i = 2 时   外层获取R, 内层用R和S 比较，交换，j-- ； 再和O比较，this.less()为假，返回外层循环
 * 2  1  O R S
 * i = 3 时    外层获取T, 内层用T和S比较，this.less()为假，返回外层循环
 * 3  3  O R S T
 * ....
 * 
 */
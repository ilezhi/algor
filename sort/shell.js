const Sort = require('../main');
/**
 * 希尔排序
 * 间隔为h的项为一组进行插入排序,
 * h减小,再次进行排序,
 * 直到h为1排序后即为最终结果
 * 当h为1时,与插入排序完全相同,但此时序列已经成为部分有序序列.
 * 插入排序对于部分有序序列排序效率特别高.
 */

class Shell extends Sort {
  sort(a) {
    let len = a.length;
    let h = 1;

    // 计算出最大间隔,使数组第一次先分成2个间隔为h的子数组
    while (h < Math.floor(len / 3)) {
      h = 3 * h + 1;
    }

    while (h >= 1) {
      for (let i = h; i < len; i++) {
        for (let j = i; j >= h && this.less(a[j], a[j-h]); j -= h) {
          this.exch(a, j, j-h);
        }
      }

      // 减小h间隔
      h = Math.floor(h / 3);
    }
  }
}

var s = new Shell();
let a = ['S', 'H', 'E', 'L', 'L', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
s.sort(a);
s.show(a);
/**
 *     'S', 'H', 'E', 'L', 'L', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'
 * 13   S                                                                P
 *           H                                                                L
 *                E                                                                E
 *      P                                                                S
 * 4    P                   L                   T                   M
 *           H                   S                   E                   S
 *                E                   O                   X                   L
 *                     L                    R                   A                  E  
 */
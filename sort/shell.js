/**
 * 希尔排序
 * 间隔为h的项为一组进行插入排序,
 * h减小,再次进行排序,
 * 直到h为1排序后即为最终结果
 * 当h为1时,与插入排序完全相同,但此时序列已经成为部分有序序列.
 * 插入排序对于部分有序序列排序效率特别高.
 */


class Shell {
  sort(arr) {
    let N = arr.length;
    let h = 1;

    // 计算间隔
    // N = 16;
    // h = 13
    while (h < N / 3) {
      h = 3 * h + 1;        // 1, 4, 13, 40, ...
    }

    // 控制h的间隔
    while (h >= 1) {
      // 从间隔h项开始,逐项遍历到最后一个
      for (let i = h; i < N; i++) {
        // 内存循环负责第i项,与前i - h, i - 2 * h, ...比较.
        for (let j = i; j >= h && this.less(arr[j], arr[j-h]); j -= h) {
          this.exch(arr, j, j-h);
        }
      }
      h = Math.floor(h / 3);
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
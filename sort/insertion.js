/**
 * 插入排序
 * 
 * 在元素插入的时候排序，其余的元素都需要右移
 * 打扑克牌时就是插入排序的例子
 * 
 */


class Insertion {
  sort(arr) {
    console.log(`起始数据 : ${arr.join(' ')}`)
    let N = arr.length;
    let i = 1;
    // 外层循环用于控制用第i个值插入前0到i-1个值
    for (i; i < N; i++) {
      let j = i;
      // 内层循环用于将i值插入到合适位置
      // i前面的值都是已排好序的
      // this.less(arr[j], arr[j-1]) 主要用于判断是否执行交换
      for (j; j > 0 && this.less(arr[j], arr[j-1]); j--) {
        this.exch(a, j, j-1);
      }
      console.log(`第${i}次交换: ${arr.join(' ')}`)
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
  }

  isSorted(arr) {
    // 是否有序
  }
}

let s = new Insertion();
let a = ['S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E'];
s.sort(a);

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
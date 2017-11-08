const Sort = require('../main');
/**
 * 使用二叉堆实现优先队列
 * 在二叉堆的数组中，每个元素都要保证大于等于另两个特定的元素
 * 相应的，这些位置的元素又至少要大于等于数组中的另两个元素
 * 将所有元素画成一棵二叉树，并将每个较大元素和两个较小元素用边连接。
 * 
 * 1. 当一棵二叉树的每个结点都大于等于它的两个子结点时，被称为堆有序。
 * 相应的，每个节点都小于等于它的父结点。根节点是最大的结点
 * 
 * 2. 在数组中存储二叉堆。不使用数组中第一个位置。
 * 位置为k的结点的父结点的位置为k/2, 两个子结点分别为2k,2k+1
 * 
 * 3. 使用一个大小为N+1的数组pq来表示一个大小为N的堆。不使用pq[0]，
 * 堆元素放在pq[1]-pq[N]中
 */
class MaxPQ {
  constructor(n) {
    this.pq = new Array(n + 1);
    this.N = 0;
  }

  insert(v) {
    // 向优先队列中插入一个元素
    this.pq[++this.N] = v;      // 数组末尾插入元素
    this.swim(N);     // 将插入元素上浮
  }

  max() {
    // 返回最大元素
    return this.pq[1];
  }

  delMax() {
    // 删除并返回最大元素
    let max = this.pq[1];
    this.exch(1, this.N--);   // 最大和最小元素交换
    this.pq[N+1] = null;      // 删除最大元素
    this.sink(1);             // 将交换后的数据下沉
    return max;
  }

  isEmpty() {
    // 队列是否为空
    return this.N === 0;
  }

  size() {
    // 返回队列中元素个数
    return this.N;
  }

  less(i, j) {
    return this.pq[i] < this.pq[j];
  }

  exch(i, j) {
    let pq = this.pq;
    let t = pq[i];
    pq[i] = pq[j];
    pq[j] = t;
  }

  swim(k) {
    // 由下至上的堆有序化(上浮)
    // 比父结点大
    while (k > 1 && this.less(k / 2, k)) {
      this.exch(k / 2, k);
      k = Math.floor(k / 2);
    }
  }

  sink(k) {
    // 由上至下的堆有序(下沉)
    // 比子结点小
    while(2 * k <= N) {
      let j = 2 * k;
      if (j < N && this.less(j, j + 1)) {
        // 判断2k + 1 是否更大
        j++;
      }

      if (!this.less(k, j)) {
        // k大于等于子结点，则下沉结束
        break;
      }

      this.exch(k, j);
      k = j;
    }
  }
}


/**
 * 堆排序
 * 
 * 
 */
class Stack extends Sort {
  sort(a) {
    let N = a.length - 1;
    // 将一个任意序列构造成堆有序
    for (let k = Math.floor(N / 2); k >= 1; k--) {
      this.sink(a, k, N);
    }

    // 将最大值替换，并下沉
    while (N > 1) {
      this.exch(a, 1, N--);
      this.sink(a, 1, N);
    }
  }

  sink(a, k, N) {
    while (2 * k <= N) {
      let j = 2 * k;
      if (j < N && this.less(a[j], a[j + 1])) {
        j++;
      }

      if (!this.less(a[k], a[j])) {
        break;
      }

      this.exch(a, k, j);
      k = j;
    }
  }
}

let a = ['', 'S', 'O', 'R', 'T', 'E', 'X', 'A', 'M', 'P', 'L', 'E']
let s = new Stack();
s.sort(a);
s.show(a.slice(1));

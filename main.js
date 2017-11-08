// 在这里验证算法，可以接受命令行传来的参数

class Sort {
  less(i, j) {
    return (i < j);
  }

  exch(a, i, j) {
    let t;
    t = a[i];
    a[i] = a[j];
    a[j] = t;
    console.log('换', i, j, a.join(','));
  }

  show(a) {
    console.log(a.join(','));
  }

  isSorted(a) {
    // a是否有序
  }
}

module.exports = Sort;
## 1. 找到两个数的最大公约书

自然语言描述
计算两个非负数p和q的最大公约数:
若q是0，则最大公约数为p，
否则，将p除以q得到余数r，p和q的最大公约数即为q和r的最大公约数

javascript描述
```js
function gcd(p, q) {
  if (q === 0) return q;

  var r = p % q;
  return gcd(q, r);
}

```


## 2. 二分查找

给定一个整数,和升序整数数组，找到给定整数在数组中的位置

```js
function binarySearch(key, arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + (right - left) / 2;
    if (key < arr[mid]) {
      right = mid - 1;
    } else if (key > arr[mid]) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

```
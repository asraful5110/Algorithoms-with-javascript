function cancelTimeout(func, args, timeout) {
  const cancelFn = function () {
    clearTimeout(timmer);
  };

  let timmer = setTimeout(() => {
    func(...args);
  }, timeout);

  return cancelFn;
}

function cancelInterval(fn, args, t) {
  fn(...args);
  let timmer = setInterval(() => fn(...args), t);
  let cancelFn = () => clearInterval(timmer);

  return cancelFn;
}

function test(fn) {
  let count = 0;
  let run = true;
  setTimeout(() => {
    console.log("Time out");
  }, 2000);

  while (run) {
    count += 1;
    if (count === 10000) {
      run = false;
    }
    console.log(count);
  }
}

class TimeLimit {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    let found = this.cache.has(key);
    if (found) {
      clearTimeout(this.cache.get(key).ref);
    }

    this.cache.set(key, {
      value,
      ref: setTimeout(() => {
        this.cache.delete(key);
      }, duration),
    });

    return found;
  }

  get(key) {
    let found = this.cache.has(key);
    if (found) {
      return this.cache.get(key);
    }

    return -1;
  }

  count() {
    return this.cache.size;
  }
}

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        let res = nums[i] + nums[j];

        if (res === target) {
          console.log(res);
          console.log(i, j);
          return [i, j];
        }
      }
    }
  }
}

//twoSum([2,7,4,3,8,4],12);

function mergeTwoWord(word1, word2) {
  let merge = [];
  let len1 = word1.length;
  let len2 = word2.length;
  let len;
  if (len1 > len2) {
    len = len1;
  } else {
    len = len2;
  }

  for (let i = 0; i <= len; i++) {
    merge.push(word1[i]);
    merge.push(word2[i]);
  }

  let remove = merge.filter(function (value) {
    if (value !== undefined) {
      return value;
    }
  });

  console.log(remove);
}

class SingleLinklist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = {
      value,
    };
  }
}

class Test {
  constructor(num) {
    this.a = num;
  }

  add() {
    let met = new Test(10);
    console.log(met.a);
  }
}

function chunk(arr, size=1) {
  let length = arr.length;
  let temp = 0;
  let result = [];
  for (let i = 0; i < length; i++) {
    let res = [];
    for (let j = temp; j < temp + size; j++) {
      if (arr[j] === undefined) break;
      res.push(arr[j])
    }


    if (temp >= length) break;
    temp += size;
    
    result.push(res)
  }

  return result;
}


let final = chunk([1, 2, 345, 6, 5, 4, 3],2);

console.log(final)

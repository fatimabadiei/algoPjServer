export class AlgoBase {
    swap(arr, first, second) {
      const temp = arr[first];
      arr[first] = arr[second];
      arr[second] = temp;
    }
  
    bubbleSort(arr) {
      const len = arr.length;
      for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
          if (arr[j] > arr[j + 1]) {
            this.swap(arr, j, j + 1);
          }
        }
      }
      return arr;
    }

    countingSort(arr, min, max){
        let i = min,
            j = 0,
            len = arr.length,
            count = [];
        for (i; i <= max; i++) {
            count[i] = 0;
        }
        for (i = 0; i < len; i++) {
            count[arr[i]] += 1;
        }
        for (i = min; i <= max; i++) {
            while (count[i] > 0) {
                arr[j] = i;
                j++;
                count[i]--;
            }
        }
        return arr;
    };


    //countingSort(arr, min, max) {
    //    const count = {};
        //First populate the count object
    //    for (let i = min; i <= max; i++) {
    //      count[i] = 0;
    //    }
    //    for (let i = 0; i < arr.length; i++) {
      //    count[arr[i]] += 1;
     //   }
    
        // Then, iterate over count's properties from min to max:
       // const sortedArr = [];
       //for (let i = min; i <= max; i++) {
         // while (count[i] > 0) {
          //  sortedArr.push(i);
           // count[i]--;
        // }
        //}
        //return sortedArr;
      //}

      heapify(arr, length, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = left + 1;
        if (left < length && arr[left] > arr[largest]) {
          largest = left;
        }
        if (right < length && arr[right] > arr[largest]) {
          largest = right;
        }
        if (largest != i) {
          this.swap(arr, i, largest);
          this.heapify(arr, length, largest);
        }
        return arr;
      }

      heapSort(arr) {
        let length = arr.length;
        let i = Math.floor(length / 2 - 1);
        let k = length - 1;
    
        while (i >= 0) {
          this.heapify(arr, length, i);
          i--;
        }
        while (k >= 0) {
          this.swap(arr, 0, k);
          this.heapify(arr, k, 0);
          k--;
        }
        return arr;
      }

      insertionSort(arr) {
        const len = arr.length;
        let j;
        for (let i = 1; i < len; i++) {
          const key = arr[i];
          j = i - 1;
          while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j -= 1;
          }
          arr[j + 1] = key;
        }
        return arr;
      }

      merge(left, right) {
        const arr = [];
        while (left.length && right.length) {
          if (left[0] < right[0]) {
            arr.push(left.shift());
          } else {
            arr.push(right.shift());
          }
        }
        return [...arr, ...left, ...right];
      }
    
      mergeSort(arr) {
        const half = arr.length / 2;
        if (arr.length < 2) {
          return arr;
        }
        const left = arr.splice(0, half);
        return this.merge(this.mergeSort(left), this.mergeSort(arr));
      }

      partition(arr, left, right) {
        const pivot = arr[Math.floor((right + left) / 2)];
        // let left;
        // let right;
        while (left <= right) {
          while (arr[left] < pivot) {
            left++;
          }
          while (arr[right] > pivot) {
            right--;
          }
          if (left <= right) {
            this.swap(arr, left, right);
            left++;
            right--;
          }
        }
        return left;
      }

      quickSort(arr, left, right) {
        let index;
        const len = arr.length;
        if (len > 1) {
          index = this.partition(arr, left, right);
          if (left < index - 1) {
            this.quickSort(arr, left, index - 1);
          }
          if (index < right) {
            this.quickSort(arr, index, right);
          }
        }
        return arr;
      }

      getMax(arr) {

        let max = 0;
        for (let num of arr) {
            if (max < num.toString().length) {
                max = num.toString().length
            }
        }
        return max
    }

      getPosition(num, place){
        return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10
     }

     radixSort(arr) {

        const max = this.getMax(arr); // length of the max digit in the array
    
        for (let i = 0; i < max; i++) {
            let buckets = Array.from({ length: 10 }, () => [ ])
            for (let j = 0; j < arr.length; j++) {
              buckets[this.getPosition(arr[ j ], i)].push(arr[ j ]); // pushing into buckets
            }
            arr = [ ].concat(...buckets);
        }
        return arr
    }

      selectionSort(arr) {
        const len = arr.length;
        for (let i = 0; i < len; i++) {
          let min = i;
          for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
              min = j;
            }
            if (min != i) this.swap(arr, i, min);
          }
        }
        return arr;
      }
    }


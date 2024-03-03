# 버블정렬

버블 정렬(Bubble Sort)은 인접한 두 요소를 비교하여, 잘못된 순서가 있을 경우 위치를 교환하는 가장 간단한 정렬 알고리즘 중 하나입니다. 이 방식은 배열의 모든 요소가 올바른 순서로 정렬될 때까지 반복됩니다. JavaScript로 구현한 버블 정렬 알고리즘과 함께 주의해야 할 점을 설명하겠습니다.

```javascript
function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  // 바깥쪽 루프는 배열 전체를 순회합니다.
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // 스왑이 일어났는지 추적합니다.

    // 내부 루프에서는 인접한 요소를 비교하고, 필요한 경우 위치를 교환합니다.
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // 인접한 요소의 순서가 잘못된 경우, 요소의 위치를 교환합니다.
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        swapped = true; // 스왑 발생을 표시합니다.
      }
    }

    // 내부 루프에서 스왑이 한 번도 일어나지 않았다면, 배열이 이미 정렬된 것입니다.
    if (!swapped) {
      break;
    }
  }

  return arr; // 정렬된 배열을 반환합니다.
}

// 예제 배열
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array));
```

주의할 점
성능: 버블 정렬은 평균적으로
O(n2)최적화: 위의 코드에서는 swapped 변수를 사용하여 이미 정렬된 배열에 대한 불필요한 비교를 최소화합니다. 이런 최적화를 통해 최악의 경우가 아닌 상황에서의 성능을 다소 개선할 수 있습니다.
안정성: 버블 정렬은 안정 정렬(stable sort)입니다. 즉, 같은 값을 가진 요소들의 상대적 순서가 정렬 과정에서 변하지 않습니다. 이 특성은 특정 상황에서 유용할 수 있습니다.
# 퀵정렬

퀵 정렬(Quick Sort)은 평균적으로 매우 빠른 실행 시간을 자랑하는 분할 정복(divide and conquer) 알고리즘입니다. 기본 아이디어는 '피벗(pivot)'이라고 불리는 요소를 기준으로 배열을 두 부분으로 나누는 것입니다: 하나는 피벗보다 작은 모든 요소를 담고, 다른 하나는 피벗보다 큰 모든 요소를 담습니다. 이렇게 분할된 각 부분을 재귀적으로 정렬합니다. 퀵 정렬의 성능은 피벗 선택 방법에 크게 의존하며, 평균적인 시간 복잡도는O(nlogn)입니다.

다음은 JavaScript로 구현한 퀵 정렬 알고리즘의 예시입니다:

```javascript
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // 분할(divide): 피벗을 기준으로 배열을 분할합니다.
    const pivotIndex = partition(arr, left, right);

    // 정복(conquer): 각 부분을 재귀적으로 정렬합니다.
    quickSort(arr, left, pivotIndex - 1); // 피벗의 왼쪽 부분을 정렬합니다.
    quickSort(arr, pivotIndex + 1, right); // 피벗의 오른쪽 부분을 정렬합니다.
  }
  return arr;
}

// 배열을 피벗을 기준으로 분할하고, 피벗의 최종 위치 인덱스를 반환합니다.
function partition(arr, left, right) {
  const pivot = arr[right]; // 이 예제에서는 가장 오른쪽 요소를 피벗으로 사용합니다.
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 작은 요소를 피벗의 왼쪽으로 이동합니다.
    }
  }

  // 피벗을 최종 위치로 이동합니다.
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1; // 피벗의 인덱스를 반환합니다.
}

// 예제 배열
const array = [10, 7, 8, 9, 1, 5];
console.log("Sorted array:", quickSort(array));
```

주의할 점
피벗 선택: 피벗 선택은 퀵 정렬의 성능에 큰 영향을 미칩니다. 가장 간단한 방법은 항상 첫 번째 요소나 마지막 요소를 피벗으로 선택하는 것이지만, 이 경우 이미 정렬된 배열에 대해 최악의 성능을 보일 수 있습니다. 다양한 피벗 선택 전략이 있으며, 그 중 하나는 배열의 중간 값이나 임의의 요소를 피벗으로 선택하는 것입니다.
최악의 시간 복잡도: 피벗이 매우 나쁘게 선택되면(예: 항상 최소값이나 최대값을 피벗으로 선택하는 경우) 퀵 정렬의 시간 복잡도는O(n2)까지 늘어날 수 있습니다. 그러나 적절한 피벗 선택 전략과 배열의 부분적으로 무작위화된 상태는 이러한 최악의 시나리오를 피할 수 있도록 도와줍니다.
재귀 깊이: 큰 배열을 정렬할 때는 재귀 호출이 깊어질 수 있으므로, 스택 오버플로를 방지하기 위한 방안을 고려해야 합니다. 일부 구현에서는 재귀 대신 반복을 사용하거나, 특정 재귀 깊이에 도달하면 힙 정렬과 같은 다른 정렬 알고리즘으로 전환하는 기법을 사용하기도 합니다.

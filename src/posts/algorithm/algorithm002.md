### 기본 알고리즘 종류

1. 삽입 정렬 (Insertion Sort)
   삽입 정렬은 각 번째 요소를 이미 정렬된 배열 부분과 비교하여 해당 요소가 들어갈 올바른 위치를 찾아 삽입하는 방식으로 작동합니다. 마치 카드 게임에서 손에 든 카드를 정렬하는 것과 비슷합니다. 각 단계에서 하나의 요소를 정렬된 부분에 삽입함으로써 최종적으로 전체 배열을 정렬합니다.

2. 선택 정렬 (Selection Sort)
   선택 정렬은 배열 전체에서 가장 작은 요소를 선택하여 현재 위치의 요소와 교환하는 방식으로 작동합니다. 이 과정을 배열의 모든 요소에 대해 반복함으로써 전체 배열을 정렬합니다. 간단하지만 큰 데이터 세트에서는 비효율적일 수 있습니다.

3. 버블 정렬 (Bubble Sort)
   버블 정렬은 인접한 두 요소를 비교하여 잘못된 순서(예: 오름차순 정렬에서 앞의 요소가 더 큰 경우)가 있을 때 교환하는 방식으로 작동합니다. 이 과정을 배열이 정렬될 때까지 반복합니다. 간단하고 이해하기 쉽지만, 비효율적인 정렬 방법 중 하나입니다.

4. 퀵 정렬 (Quick Sort)
   퀵 정렬은 분할 정복 전략을 사용하여 배열을 정렬합니다. 피벗(pivot)을 선택하고 피벗보다 작은 요소는 피벗의 왼쪽, 큰 요소는 오른쪽으로 이동시킵니다. 이 과정을 재귀적으로 반복하여 전체 배열을 정렬합니다. 평균적으로 매우 빠른 성능을 보입니다.

5. 힙 정렬 (Heap Sort)
   힙 정렬은 완전 이진 트리인 힙(heap) 구조를 사용하여 배열을 정렬합니다. 배열을 최대 힙으로 구성한 뒤, 가장 큰 요소(힙의 루트)를 배열의 끝부분과 교환하고, 힙의 크기를 줄여가며 이 과정을 반복합니다. 효율적인 정렬 방법 중 하나입니다.

6. 병합 정렬 (Merge Sort)
   병합 정렬은 분할 정복 방법을 사용하여 배열을 정렬합니다. 배열을 반으로 나누고, 각 부분을 재귀적으로 정렬한 다음, 두 부분을 합쳐서 전체를 정렬합니다. 대규모 데이터 세트에 대해 안정적인 성능을 보이는 정렬 방법입니다.

7. 이진 검색 (Binary Search)
   이진 검색은 정렬된 배열에서 특정 값을 빠르게 찾는 방법입니다. 배열을 반으로 나누어 찾고자 하는 값이 중앙 값보다 큰지 작은지를 비교하고, 검색 범위를 절반으로 줄여가며 값을 찾습니다. 매우 효율적인 검색 방법입니다.

8. 기수 정렬 (Radix Sort)
   기수 정렬은 숫자의 자릿수를 기준으로 순차적으로 정렬하는 방법입니다.
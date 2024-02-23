---
title: "useQueryString"
date: "2024-02-18"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-react-hooks.png"
series: [hooks]
tag: [react, nextjs, hooks]
order: 1
published: false
---

### Why useQueryString?

```txt title="example"
ex) 친구 A는 친구 B에게 상품 리스트  링크를 주어 제품에 대해 문의합니다.
ex) 관리자가 관리하는 테이블의 3 페이지의 상세정보를 보기 위해 상세페이지로 갔다가 다시 돌아올때 혹은 새로고침을 시도할때
```

위의 경우 사용자는 정확한 데이터를 볼 수 없는 경우가 생깁니다, 이때 해결점은 query-string을 이용하여 `{url}?page=2&search=apple` 주소에 데이터를 포함하는 것이라 생각합니다.

**주의점**
외부 dependency를 사용하지 않고 최대한 순수 tavascript를 이용하여 개발합니다.

### How to use

```tsx title="app/test/page.txt"
import { useQueryString } from "@webchemist/hooks";

type QueryStringProps = {
  page: string;
  search: string;
};

const TestPage = () => {
  const {} = useQueryString<QueryStringProps>({});
  const onSubmit = () => {};

  return (
    <div>
      <h1>{}</h1>
      <form onSubmit={onSubmit}>
        <input name="page" />
        <input name="search" />
      </form>
    </div>
  );
};

export default TestPage;
```

---
title: "Git config & Github SSH setting"
date: "2024-01-01"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, git, github, ssh]
order: 4
published: false
---

개발자로써 Git을 이용할 때의 정보를 자기자신에게 맞출 수 있어야합니다.

Git의 설정은 `git config` 명령어로 설정할 수 있습니다. 여러가지 설정을 할 수 있지만 기본적인 것과 설정하면 편리하게 사용할 수 있는 내용을 준비해봤습니다.

### 기본 브랜치 변경

```bash
git config --global init.defaultBranch main
```

예전엔 기본 브랜치가 `master` 였지만 최근 `main`을 많이 이용하고 있습니다. 만약 프로젝트에서 `git init`의 명령어로 git을 적용시킬시에 ` `master`로 생성이 되어 매번 수기로 `main`으로 변경하고 있다면 위의 명령어 한번에 해결됩니다.

### 사용자 이름과 이메일 설정

```bash
git config --global user.name "name"
git config --global user.email "example@email.com"
```

git을 이용하여 개발한 내용을 `push` 를 통해 내용을 올릴 수 있습니다. 이때 배포자가 누구인지에 대한 정보도 같이 올라가게 되어 있습니다.

![gitlog](/images/2024-01-03-macos-setup4/gitlog.png)

`git log`의 명령어를 통해 이전 내역을 체크할때도 위와 같이 Author에 나의 정보를 추가 또는 변경할 수 있습니다. 만약 프로젝트별로 사용자와 이메일을 다르게 하고 싶다면 `--global` 옵션을 제거 하여 `local` 환경에 별도 설정하시면 됩니다.

### 기본 에디터 변경

```bash
git config --global core.editor "code --wait --disable-extensions"
```

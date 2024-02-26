---
title: "Git config & Github SSH setting"
date: "2024-02-26"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, git, github, ssh]
order: 4
published: true
---

`Git`은 소프트웨어 개발 과정에서 필수적인 버전 관리 시스템입니다. 코드의 변경 사항을 추적하고, 여러 개발자가 동시에 작업하는 복잡한 프로젝트를 효율적으로 관리할 수 있게 해줍니다. `Git 설정을 개인화`하여 사용함으로써, 개발 과정을 더욱 원활하고 효율적으로 만들 수 있습니다. 여기서는 Git을 사용할 때 알아두면 좋은 몇 가지 추가 설정에 대해 소개하겠습니다.

### 기본 브랜치명 변경하기

최근 소프트웨어 개발 커뮤니티에서는 `master` 브랜치 명을 `main`으로 변경하는 추세입니다. 이는 더 포괄적이고 배려 깊은 용어 사용을 장려하기 위함입니다. Git에서 새로운 저장소를 초기화할 때 기본적으로 설정되는 브랜치 명을 `main`으로 변경하려면 다음과 같이 설정합니다:

```bash
git config --global init.defaultBranch main
```

이 설정은 `git init` 명령어를 사용하여 새 저장소를 생성할 때 main이 기본 브랜치로 설정되도록 합니다. 이는 매번 수동으로 기본 브랜치를 변경하는 번거로움을 없애줍니다.

### 사용자 정보 설정하기

Git에서 커밋을 생성할 때, 각 커밋에는 작성자의 이름과 이메일이 기록됩니다. 이 정보는 커밋의 메타데이터에 포함되어 누가 해당 변경을 했는지 식별하는 데 사용됩니다. 전역 사용자 이름과 이메일을 설정하려면 다음 명령어를 사용합니다:

```bash
git config --global user.name "YourName"
git config --global user.email "YourEmail@example.com"
```

이 설정은 모든 Git 프로젝트에 대해 사용되며, 각 커밋에 자동으로 이 정보를 포함시킵니다. 프로젝트별로 다른 이름이나 이메일을 사용하고 싶다면, 해당 프로젝트 디렉토리에서 위 명령어를 --global 옵션 없이 실행하면 됩니다.

### 별칭(alias) 설정

Git 명령어는 때로 길고 복잡할 수 있습니다. 자주 사용하는 명령어에 대해 별칭을 설정하여 더 빠르고 간단하게 명령을 실행할 수 있습니다.

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

### 색상 표시 활성화

Git의 출력 결과에 색상을 추가하여 가독성을 높일 수 있습니다. 다음 명령어를 통해 색상 출력을 활성화할 수 있습니다:

```bash
git config --global color.ui auto
```

### 머지 및 리베이스 동작 설정

머지(Merge)나 리베이스(Rebase)를 할 때 기본적으로 사용할 동작을 설정할 수 있습니다. 예를 들어, 머지 시 충돌 발생을 방지하기 위해 머지 커밋을 강제로 만들도록 설정할 수 있습니다:

```bash
git config --global merge.commit no
```

리베이스 시에는 충돌이 발생했을 때 바로 해결할 수 있도록 설정할 수 있습니다:

```bash
git config --global rebase.autosquash true
```

### 마치며

Git 설정을 개인의 작업 스타일과 프로젝트 요구 사항에 맞게 조정함으로써, 개발 과정을 보다 효율적으로 관리할 수 있습니다. 위에서 언급한 설정 외에도 Git은 다양한 맞춤 설정 옵션을 제공하므로, 자신의 필요에 맞게 탐색하고 적용하는 것이 좋습니다. Git의 이러한 유연성은 복잡한 개발 환경에서도 원활한 작업 흐름을 유지하는 데 큰 도움이 됩니다.

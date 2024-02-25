---
title: "Setup NVM"
date: "2024-01-01"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, node, nvm]
order: 3
published: false
---

NVM이란, `Node Version Manager`의 약자로 Node버전을 관리해줍니다.
이전 [Homebrew를 이용한 Package 설치](https://gennyoon.net/macos/macos001)를 통한 brew를 통해 설치를 진행해줍니다.

```bash
# Brewfile에 등록도 해주세요.
brew install nvm
```

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion >> ~/.zshrc

source ~/.zshrc
```

### 최신 lts버전 Node 설치

```bash
nvm install --lts
```

만약 필요한 버전이 별도로 있다면 `nvm install {version}`으로 설치해주시면 됩니다. 처음 설치 하였기때문에 자동으로 alias는 default로 설정이 됩니다.

만약 별도로 설정해야 할때는 다음과 같이 해주시면 됩니다.

```bash title="change nvm default alias"
nvm alias default {version}
```

위의 명령어로 현재 기본으로 사용하는 버전을 설정해주세요. default가 현재 설치한 버전으로 고정됩니다.

이제 `node`, `npm`의 명령어를 자유롭게 사용할 수 있게 되었습니다.
시험 삼아서 next.js 프로젝트를 설치해봅니다.

```bash
npx create-next-app
```

<!-- nvm list -->
<!-- ``` -->
<!---->
<!-- 현재 설치된 버전, 선택된 버전을 알 수 있습니다. -->
<!---->
<!-- ```bash -->
<!-- nvm use default -->
<!-- ``` -->
<!---->
<!-- default로 설정된 node버전을 이용하겠다 설정하면 기본적 설정은 완료 됩니다. -->
<!---->
<!-- 이 -->

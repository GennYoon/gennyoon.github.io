---
title: "Setup NVM"
date: "2024-01-01"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, node, nvm]
order: 3
published: true
---

NVM이란, `Node Version Manager`의 약자로 Node버전을 관리해줍니다.
이전 [Homebrew를 이용한 Package 설치](https://gennyoon.net/macos/macos001)를 통한 brew를 통해 설치를 진행해줍니다.

```bash
# Brewfile에 등록도 해주세요.
brew install nvm
```

설치가 완료되면 다음의 내용을 .zshrc에 추가해 달라는 글이 있습니다.
추가를 해주시면 nvm 명령어를 사용하실 수있게 됩니다.

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion >> ~/.zshrc

source ~/.zshrc
```

### 최신 LTS버전 Node 설치

```bash
nvm install --lts
```

만약 필요한 버전이 별도로 있다면 `nvm install {version}`으로 설치해주시면 됩니다. 처음 설치 하였기때문에 자동으로 alias는 default로 설정이 됩니다.

만약 별도로 설정해야 할때는 다음과 같이 해주시면 됩니다.

```bash title="change nvm default alias"
nvm alias default {version}
```

위의 명령어로 현재 기본으로 사용하는 버전을 설정해주세요. default가 현재 설치한 버전으로 고정됩니다.

설치가 잘 되었는지 버전을 체크해봅니다.

```bash
node -v
V20.11.1

npm -v
10.2.4
```

이제 `node`, `npm`의 명령어를 자유롭게 사용할 수 있게 되었습니다.

### .nvmrc 파일로 프로젝트 관리하기

Vim개발자인 저에게는 terminal에서 인식하는 node버전은 중요합니다. 하지만 프로젝트마다 node버전을 매번 바꿔주기도 힘들기 때문에 .nvmrc를 이용해서 자동 변경될 수 있게 합니다.

프로젝트 내부에 .nvmrc 파일을 생성해서 다음과 같이 버전을 넣어줍니다.

```bash title=".nvmrc"
v20.11.1
```

이제 zsh의 설정파일에 다음을 추가하여 폴더 이동시에 .nvmrc파일을 인식하고 내부에 버전을 체크하여 현재와 다르면 설치 및 변경하게 하고, 아무것도 없는 폴더로 나올때 default node버전이 아닐때는 default 버전으로 변경되게 합니다.

```bash title="~/.zshrc"
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc

```

### 마치며

node버전으로 인한 어이없는 오류발생을 경험하지 맙시다.

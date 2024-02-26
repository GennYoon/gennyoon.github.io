---
title: "Setup NVM"
date: "2024-02-25"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, node, nvm]
order: 3
published: true
---

`Node.js` 개발에 있어 버전 관리는 매우 중요한 측면 중 하나입니다. 다양한 프로젝트에서 요구하는 `Node.js`의 버전이 서로 다를 수 있으며, 이를 효과적으로 관리하지 못하면 개발 환경에서 예상치 못한 문제가 발생할 수 있습니다. 이러한 문제를 해결하기 위해 `Node Version Manager`, 즉 `NVM`을 사용하는 방법에 대해 소개하겠습니다.

### NVM 설치하기

`NVM`은 `Node.js 버전을 쉽게 설치` 하고 관리할 수 있게 해주는 도구입니다. macOS에서 NVM을 설치하는 가장 간단한 방법은 Homebrew를 사용하는 것입니다:

```bash
# Brewfile에 등록도 해주세요.
brew install nvm
```

설치 후, NVM을 사용하기 위해서는 `.zshrc` 파일에 환경 설정을 추가해야 합니다. 이 설정은 NVM을 초기화하고, 필요한 스크립트를 실행하는 데 필요합니다:

```bash
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion >> ~/.zshrc

source ~/.zshrc
```

### 최신 LTS버전 Node 설치

NVM을 통해 `Node.js의 최신 LTS(Long Term Support) 버전`을 설치할 수 있습니다:

```bash
nvm install --lts
```

특정 버전을 설치하고 싶다면, `nvm install {version}` 명령어를 사용합니다. 설치 후, 기본적으로 사용할 Node.js 버전을 설정할 수 있습니다:

```bash title="change nvm default alias"
nvm alias default {version}
```

### .nvmrc 파일로 프로젝트 별 Node.js 버전 관리

개발 환경에서 각 프로젝트의 Node.js 버전을 자동으로 관리하려면, 프로젝트 루트에 `.nvmrc` 파일을 생성하고 원하는 Node.js 버전을 지정합니다:

```bash title=".nvmrc"
v20.11.1
```

이후, .zshrc 파일에 스크립트를 추가하여 셸이 프로젝트 디렉토리로 이동할 때마다 `.nvmrc` 파일을 확인하고, 해당 버전으로 자동으로 변경하도록 설정합니다:

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

`NVM`을 사용함으로써 `Node.js 버전 관리`를 손쉽게 할 수 있게 되었습니다. 이제 개발자는 프로젝트마다 요구하는 Node.js 버전을 쉽게 전환하며, 버전 차이로 인한 문제 없이 개발에 집중할 수 있게 되었습니다. Node.js 개발 환경을 최적화하고 싶은 개발자라면 NVM의 사용을 고려해보세요.

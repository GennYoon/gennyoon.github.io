---
title: "Install Package using Homebrew"
date: "2024-02-23"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, brew, package]
order: 1
published: true
---

개발 환경을 구축하는 과정에서, 패키지 관리자의 역할은 매우 중요합니다. macOS 사용자들에게 `Homebrew`는 필수 도구 중 하나로 꼽히며, 이를 통해 `필요한 패키지나 애플리케이션을 손쉽게 설치`하고 관리할 수 있습니다. 이 글에서는 Homebrew의 설치 방법과 함께, 개발에 필요한 환경을 설정하는 방법을 소개하겠습니다.

### Homebrew 설치하기

```bash title="install homebrew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

설치가 완료되면, Homebrew 명령어를 사용할 수 있도록 환경 변수 설정을 추가합니다:

```bash title="set homebrew path"
(echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> ~/.zprofile
```

### 필요한 패키지 정하기

개발 환경에 필요한 도구들을 선별하는 것은 개인의 작업 스타일과 필요에 따라 달라집니다. 예를 들어, TypeScript 개발에 필요한 환경을 구축한다면, git, nvm, IDE 등의 기본 도구들이 필요할 것입니다. `Homebrew Formulae` 나 커맨드라인을 통해 필요한 패키지를 검색하고 선택할 수 있습니다.

### Brewfile을 이용한 일괄설치

설치할 패키지 목록을 `Brewfile`에 정리하면, 이후 환경 설정이나 새로운 장비로의 이전 시 시간을 절약할 수 있습니다. Brewfile의 예시는 다음과 같습니다:

```bash title="Brewfile"
# Brewfile
tap "homebrew/bundle"
tap "homebrew/cask-fonts"

brew "cask"
brew "git"
brew "nvm"

cask "slack"
cask "docker"
cask "devtoys"
cask "raycast"
cask "notion"
cask "zoom"

cask "arc"
cask "google-chrome"

cask "visual-studio-code"
cask "android-studio"

cask "font-jetbrains-mono-nerd-font"
```

이렇게 정리된 `Brewfile`을 사용하면, `brew bundle` 명령어로 모든 필요한 패키지와 애플리케이션을 한 번에 설치할 수 있습니다.

### 마치며

`Homebrew`를 이용하면 macOS에서의 패키지 관리가 훨씬 간단해집니다. 필요한 도구들을 `Brewfile`에 정리해두면, 언제든지 환경을 재구축할 수 있어 효율적입니다. 이 방법을 통해 개발 환경을 빠르고 쉽게 설정해보세요.

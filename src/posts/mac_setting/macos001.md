---
title: "Installation Homebrew"
date: "2024-02-01"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, brew]
order: 1
published: true
---

### Installation Homebrew

<a href="https://brew.sh/" target="_blank" rel="noreferrer noopener">Homebrew</a>는 MacOS의 패키지 관리로 개발자들에게 필수적인 도구입니다.
설치를 진행하여 필요한 패키지, 프로그램을 설치하여 사용해봅니다.

```bash title="commandline install homebrew"
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<br />

### Required installation list

이제 자신이 사용하는 내용을 잘 생각해서 설치를 진행하면 됩니다. 저 같은 경우는 Typescript로 개발을 자주 하다보니 해당 개발환경에 필요한 설정을 먼저 하려합니다.

<br />

해당 내용은 <a href="https://formulae.brew.sh/" target="_blank" rel="noreferrer noopener">Homebrew Formulae</a>에서 검색 가능하며 설치 명칭을 가져와 설치해주세요.
또는 Commandline으로도 검색이 가능합니다.

```bash title="search brew"
brew search [name]
```

<br />

이제 목록을 만들어 봅니다. ( <small>`주의` 자신이 사용하는 내용으로 추가하시면 됩니다. 그리고 설치하려는 모든 내용이 brew에 존재하진 않습니다</small> )

```markdown title="list to install"
# Brew

- git # 형상관리로 다른 개발자들과 협업을 위해서는 필수 입니다.
- nvm # `Node Version Manager`로 Node를 버전별로 설치, 변경이 용이합니다.
- cask # brew install --cask로 프로그램들을 설치 할 수 있게 돕습니다.

# =========== [ Cask ] ================

- slack #
- docker (Optional) #
- devtoys (Optional) #
- raycast (Optional) #
- notion (Optional) #
- zoom (Optional) #

# Choose Browser or Both

- arc # 외국분들이 많이 사용하더라구요 가볍고 좋습니다.
- google-chrome # 구글 크롬
- firefox # 파이어폭스

# Choose IDE

- visual-studio-code # VSCode
- intellij-idea # 인텔리제이
- android-studio # 안드로이드 스튜디오 ( AOS 앱개발시에는 필수 입니다. )
```

이제 위의 내용을 설치를 시작하시면 됩니다. **하지만 여기서 잠깐!!**

<br />

### Managing with Brewfile

Brewfile이라고 들어보셨나요? 위의 리스트를 하나씩 설치하고 보관하지 않아도 됩니다.

우선 아래와 같이 파일을 작성합니다.

```bash title="Brewfile"
# Brewfile
brew "tap homebrew/bundle"
brew "tap homebrew/cask-fonts"

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

다시 한번 이야기 드리지만 설치 목록은 여러분들이 작성하시는 것입니다. 😉

이제 다음의 명령어를 입력하면 한번에 설치가 시작됩니다.

```bash
brew bundle
```

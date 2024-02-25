---
title: "Setup Terminal"
date: "2024-02-25"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, terminal, kitty, zsh, ohmyzsh, catppuccin]
order: 2
published: true
---

이전 [Homebrew를 이용한 Package 설치](https://gennyoon.net/macos/macos001)를 통해 `brew` 명령어가 가능해지고 `package` 관리가 용이해졌습니다. 이제는 개발자들이 자주 사용하게 되는 `terminal`을 구성해보려합니다.

많은 분들이 `iterm2`를 이용해서 `terminal`을 이용하시는데 `iterm2`의 경우는 다른 곳에서 찾아보시면 많이 나옵니다.

### Kitty 설치

저는 개발자체를 `Vim`으로 하고 있어서 terminal의 성능에 민감합니다. 여러 `rust로 제작된 terminal`이 많았지만 그중에 `kitty`가 제일 마음에 들어서 그 구성에 대해서 알려드리려고 합니다.

우선 brew를 이용해 kitty를 설치합니다.

```bash title="install kitty
# Brewfile에 등록도 해주세요.
brew install --cask kitty
```

설치 후 처음 실행하는 kitty는 mac에서 제공하는 terminal과 차이가 없을 정도로 볼품이 없습니다.

이제 천천히 꾸며보도록 하겠습니다.

```markdown title="~/.config/kitty/kitty.conf"
# Window

hide_window_decorations titlebar-only
window_padding_width 25
window_padding_height 20

# Font

font_family JetBrainsMonoNL Nerd Font
font_size 14.5
bold_font auto
italic_font auto
bold_italic_font auto
italic_font auto
bold_italic_font auto

# Term

term xterm-256color
background_opacity .9
```

kitty theme 설정하기

```bash
kitty +kitten theme --reload-in=all Catppuccin-Mocha
```

### ZSH 설치

zsh는 Terminal의 활용자들이 활용한 shell입니다. Terminal에서는 활용자들이 활용한 shell을 지원합니다.

```bash
# Brewfile에 등록도 해주세요.
brew install zsh
```

### Starship 설치

startship은 모든 쉘에 대한 최소한의, 매우 빠른 속도, 무한히 사용자 정의 가능한 프롬프트입니다.

https://starship.rs/

```bash title="install Starship"
curl -sS https://starship.rs/install.sh | sh
```

이제 terminal 실행과 동시에 Startship이 실행될 수 있도록 설정합니다. 저희는 zsh를 이용하기 때문에 ~/.zshrc를 생성해서 다음을 추가해줍니다.

```bash title="~/.zshrc"
...
(echo; echo 'eval "$(starship init zsh)"') >> ~/.zshrc
```

### 기능 추가하기

이제는 사용성을 위해서 기능 추가를 진행합니다.

```bash title="~/.zshrc"
# Brewfile에 등록도 해주세요.
brew install eza # 검색
brew install zsh-syntax-highlighting # 명령어 하이라이트
brew install zsh-autosuggestions # 명령어 자동완성
```

위에 설치한 기능과 추가적인 alias를 작성합니다.

```bash title="~/.zshrc
alias ..="cd.."
alias ll="eza -l -g --icons"
alias lla="ll -a"

source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
```

완료된 화면은 다음과 같습니다.
![terminal](https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog/macos/terminal.png)

### 마치며

밋밋한 `macOS`의 `terminal`에서 `kitty`를 이용한 멋스러운 `terminal`이 완성되었습니다. 세부적인 기능은들 공식사이트에서 자신의 입맛에 맞춰 진행하시면됩니다.

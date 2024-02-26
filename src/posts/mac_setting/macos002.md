---
title: "Setup Terminal"
date: "2024-02-24"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, terminal, kitty, zsh, ohmyzsh, catppuccin]
order: 2
published: true
---

개발 환경을 개선하는 것은 모든 개발자에게 중요한 과제입니다. 특히 터미널은 많은 시간을 보내는 공간이므로, 이를 개인의 취향과 작업 흐름에 맞춰 최적화하는 것이 중요합니다. 이 글에서는 macOS용 터미널 중 하나인 `Kitty`의 설치 및 구성 방법을 소개하고, `Zsh`와 `Starship` 프롬프트를 사용하여 터미널 환경을 더욱 풍부하고 유용하게 만들어 보겠습니다.

### Kitty 설치

`Kitty`는 `Rust`로 만들어진 터미널 애플리케이션으로, 특히 `Vim 사용자`들에게 성능 면에서 인기가 높습니다. `Homebrew`를 통해 쉽게 설치할 수 있습니다:

```bash title="install kitty
brew install --cask kitty
```

### Kitty 구성하기

`Kitty`의 설정은 `~/.config/kitty/kitty.conf` 파일을 통해 이루어집니다. 다음은 일부 기본 설정 예시입니다:

```markdown title="~/.config/kitty/kitty.conf"
# Window 설정

hide_window_decorations titlebar-only
window_padding_width 25
window_padding_height 20

# 폰트 설정

font_family JetBrainsMonoNL Nerd Font
font_size 14.5
bold_font auto
italic_font auto
bold_italic_font auto
italic_font auto
bold_italic_font auto

# 터미널 설정

term xterm-256color
background_opacity .9
```

`Kitty`의 테마를 설정하려면, 다음 명령어를 사용하여 적용할 수 있습니다:

```bash
kitty +kitten theme --reload-in=all Catppuccin-Mocha
```

### Zsh와 Starship 설치

`Zsh`는 사용자의 생산성을 극대화하기 위해 설계된 현대적인 셸입니다. `Homebrew`를 통해 Zsh를 설치할 수 있습니다:

```bash
brew install zsh
```

`Starship`은 `Rust`로 작성된 맞춤형 가능한 프롬프트로, 여러 셸에서 사용할 수 있습니다. 설치는 다음과 같이 진행합니다:

```bash title="install Starship"
brew install starship
```

설치 후, Zsh를 사용하므로 ~/.zshrc 파일에 Starship을 초기화하는 코드를 추가합니다:

```bash
(echo 'eval "$(starship init zsh)"') >> ~/.zshrc
```

### 기능 확

터미널의 사용성을 높이기 위해 몇 가지 도구를 추가로 설치합니다:

```bash
brew install eza
brew install zsh-syntax-highlighting
brew install zsh-autosuggestions
```

이후, ~/.zshrc에 필요한 alias와 추가 기능을 설정합니다:

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

Kitty, Zsh, 그리고 Starship을 통해 더욱 향상된 터미널 환경을 구성하는 방법을 알아보았습니다. 이러한 도구들은 개발자의 효율성을 높이고, 터미널 작업을 더욱 즐겁게 만들어줍니다.

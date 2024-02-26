---
title: "Setup Vim"
date: "2024-02-27"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-macos.png"
series: [macos]
tag: [macos, setup, vim, noevim, lazygit]
order: 5
published: false
---

Neovim은 Vim의 확장성과 사용성을 개선한 모던 텍스트 에디터입니다. 개발 환경을 효율적으로 구성하고자 하는 개발자들에게 Neovim은 강력한 도구로 자리잡고 있습니다. 특히, LazyVim과 같은 플러그인 관리자를 사용하면 Neovim 환경을 손쉽게 구성하고 개인화할 수 있습니다. 이 글에서는 Neovim의 설치부터 LazyVim을 이용한 환경 구성까지의 과정을 안내합니다.

### Neovim 설치하기

```bash
brew install neovim
```

### LazyVim을 이용한 Neovim 구성

LazyVim은 Neovim의 플러그인 관리와 환경 구성을 간소화하는 도구입니다. 이를 사용하여 필요한 플러그인을 쉽게 설치하고 관리할 수 있습니다.

LazyVim 설치: LazyVim을 설치하기 위해서는 Neovim이 설치된 상태에서 다음 명령어를 실행합니다.

```bash
git clone --depth 1 https://github.com/LazyVim/LazyVim.git ~/.config/nvim
vim
```

Neovim을 처음 실행하면 LazyVim이 자동으로 필요한 플러그인과 구성 파일을 설치하기 시작합니다.

**플러그인 설치**: LazyVim을 사용하면, `init.lua` 파일을 통해 플러그인을 쉽게 추가할 수 있습니다. 예를 들어, LSP(Language Server Protocol) 지원, 자동 완성, 문법 강조 등을 위한 플러그인을 추가할 수 있습니다.

**환경 개인화**: Neovim의 환경을 개인의 코딩 스타일과 요구 사항에 맞게 조정합니다. 키 맵핑, 테마 설정, 자동 명령 등을 `init.lua` 파일에 추가하여 Neovim 환경을 개인화할 수 있습니다.

이부분은 저만의 셋팅을 작성하는 [Neovim 시리즈](https://gennyoon.net/series/neovim)로 묶어서 작성하겠습니다.

### 마치며

Neovim과 LazyVim을 사용하면 개발 환경을 더욱 강력하고 효율적으로 만들 수 있습니다. 이 도구들은 코드 편집, 디버깅, 버전 관리 등 다양한 개발 작업을 지원하며, 개발자의 생산성을 극대화할 수 있도록 돕습니다. Neovim 환경을 개인화하고 최적화하여, 코딩의 효율성과 즐거움을 높여보세요.

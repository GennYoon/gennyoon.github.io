---
title: "Flutter란?"
date: "2024-01-01"
image: "https://udakkdpxfzwyalqyjmiz.supabase.co/storage/v1/object/public/images/blog-flutter.png"
categories: [flutter]
tag: [macos, flutter]
order: 1
published: true
---

### Flutter 소개

**Flutter의 개념**: Flutter는 Google이 개발한 오픈 소스 UI 소프트웨어 개발 키트입니다. 단일 코드베이스를 사용하여 Android, iOS, Web, Windows, macOS, Linux 등 여러 플랫폼에서 네이티브 앱을 개발할 수 있게 해줍니다.

**장점**:

- **크로스 플랫폼 개발**: 하나의 코드베이스로 여러 플랫폼의 애플리케이션을 개발할 수 있어 개발 시간과 비용을 절약합니다.
- **빠른 개발 사이클**: 'Hot Reload' 기능 덕분에 코드 변경사항을 즉시 앱에 반영할 수 있어 개발 프로세스가 빨라집니다.
- **풍부한 위젯**: 머티리얼 디자인과 쿠퍼티노(스타일) 위젯을 포함하여 다양하고 맞춤화 가능한 UI 구성 요소를 제공합니다.
- **높은 성능**: Dart 코드는 네이티브 바이너리 코드로 컴파일되어 뛰어난 성능을 제공합니다.

**사용하는 이유**: Flutter는 뛰어난 성능, 빠른 개발 속도, 그리고 하나의 프로그래밍 언어와 코드베이스로 여러 플랫폼에 앱을 배포할 수 있는 유연성을 제공하기 때문에 많은 개발자들이 선택합니다.

### Dart 언어 기초

**Flutter 앱 개발에 사용되는 Dart 언어의 기본 사항**: Dart는 Flutter를 위해 Google이 선택한 프로그래밍 언어입니다. 객체 지향적이며, 가비지 컬렉션을 제공하고, 빠르게 개발할 수 있는 언어입니다.

- **구문**: Java나 JavaScript와 유사한 구문을 가지고 있어 이러한 언어에 익숙한 개발자라면 쉽게 배울 수 있습니다.
- **특징**: 강타입 언어로, 컴파일 타임에 타입을 체크하여 오류를 줄여줍니다.
- **함수형 프로그래밍**: Dart는 함수형 프로그래밍 요소를 지원하여 효율적인 코드 작성을 돕습니다.

### Flutter 설치 및 환경 설정

**다양한 운영 체제에 Flutter 설치 및 환경 구성 방법**:

1. **Flutter SDK 다운로드**:
   - Flutter 공식 웹사이트([flutter.dev](https://flutter.dev/))에서 Flutter SDK를 다운로드합니다.
2. **환경변수 설정**:
   - 다운로드한 Flutter SDK의 경로를 시스템의 환경변수에 추가하여 Flutter 명령어를 어디서나 사용할 수 있도록 합니다.
3. **필요한 도구 설치**:
   - Android 개발을 위해서는 Android Studio와 Android SDK가 필요합니다.
   - iOS 개발을 위해서는 macOS에 Xcode가 설치되어 있어야 합니다.
4. **Flutter 도구 실행**:
   - 터미널이나 명령 프롬프트에서 `flutter doctor` 명령어를 실행하여 필요한 도구가 올바르게 설치되었는지 확인하고, 누락된
